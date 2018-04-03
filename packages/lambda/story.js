import AWS from "aws-sdk";
import uuidv5 from "uuid/v5";
import shortUuid from "short-uuid";
import async from "async";
import sanitizeHtml from "sanitize-html";
import Raven from "raven";
import RavenLambdaWrapper from "serverless-sentry-lib";


AWS.config.update({ region: "us-east-1" });
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const computeId = (userId, storyId) => {
  let namespace = userId;
  if (namespace.indexOf(":") > 0) namespace = namespace.split(":").pop();

  let id = storyId;
  if (id.indexOf("_")) id = id.split("_").pop();
  if (id.length < 36) id = shortUuid().toUUID(id);

  const uuid = uuidv5(id, namespace);
  return shortUuid().fromUUID(uuid);
};

const filterIframe = dirty => {
  const clean = sanitizeHtml(dirty, {
    allowedTags: ['iframe'],
    allowedAttributes: {
      iframe: ['src', 'data-*', 'width', 'height', 'referrerpolicy', 'allow', 'allowfullscreen', 'frameborder', 'scrolling']
    },
    allowedSchemes: ['http', 'https'],
    allowedSchemesAppliedToAttributes: ['src'],
    allowProtocolRelative: false,
    allowedIframeHostnames: ['www.youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com', 'w.soundcloud.com', 'www.google.com'],
    parser: {
      lowerCaseTags: true,
    },
    textFilter: () => '',
  });

  return clean;
}

const processRecord = (record, callback) => {
  const bucket = record.s3.bucket.name; // data.interviewjs.io
  const key = record.s3.object.key; // public/stories/us-east-1%3Auid/sid/story.json
  const [ userId, storyId ] = key.replace("public/stories/", "").replace("/story.json", "").split("/").map(decodeURIComponent);
  const publishId = computeId(userId, storyId);
  console.log(userId, storyId, publishId);

  console.log(bucket, key)
  s3.getObject({
    Bucket: bucket,
    Key: decodeURIComponent(key) // FIXME: assemble from parts
  }, (err, data) => {
    if (err) return callback(err);

    const story = JSON.parse(data.Body.toString("utf-8"));

    // TODO clean iframes

    s3.getObject({
      Bucket: "story.interviewjs.io",
      Key: "index.html"
    }, (err, data) => {
      if (err) return callback(err);

      const index = data.Body.toString("utf-8");

      // TODO replace in html

      s3.putObject({
        Body: index,
        ACL: "public-read",
        ContentType: "text/html",
        Bucket: "story.interviewjs.io",
        Key: `${publishId}/index.html`
      }, (err, response) => {
        if (err) return callback(err);

        console.log("done", `${publishId}/index.html`);
        callback(null, publishId);
      });
    });
  });
};

// export const publish = (event, context, callback) => {
//   async.map(event.Records, processRecord, callback);
// };

export const publish = RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
  async.map(event.Records, processRecord, callback);
});
