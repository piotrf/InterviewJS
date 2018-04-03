import AWS from "aws-sdk";
import uuidv5 from "uuid/v5";
import shortUuid from "short-uuid";
import sanitizeHtml from "sanitize-html";


AWS.config.update({ region: "us-east-1" });
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const publishId = (userId, storyId) => {
  let namespace = userId;
  if (namespace.indexOf(":") > 0) namespace = userId.split(":").pop();

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


export const publish = (event, context, callback) => {
  // get json
  // clean iframes
  // compute ID
  // get index.html
  // replace in html
  // save html
  console.log(JSON.stringify(event));
  callback(null, { message: 'Your function executed successfully!', event });
};
