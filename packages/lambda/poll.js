import AWS from "aws-sdk";
import async from "async";
import Raven from "raven";
import RavenLambdaWrapper from "serverless-sentry-lib";


AWS.config.update({ region: "us-east-1" });

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const kinesis = new AWS.Kinesis({ apiVersion: '2013-12-02' });

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
};
const statusCode = 200;


export const gateway = RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
  if (! event.body) {
    const body = JSON.stringify({ event });
    callback(null, { statusCode, headers, body });
  } else {
    kinesis.putRecord({
      Data: JSON.stringify(event),
      PartitionKey: 'interviewjs',
      StreamName: process.env.kinesis_interviewjs_poll,
    }, (err, data) => {
      if (err) return callback(err, null);
      const body = JSON.stringify({ data });
      callback(null, { statusCode, headers, body });
    });
  }
});

const processKinesisRecord = (record, callback) => {
  const body = JSON.parse(JSON.parse(new Buffer(record.kinesis.data, 'base64').toString()).body);

  console.log(body);
  callback(null, { body });
};

export const stream = RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
  async.map(event.Records, processKinesisRecord, callback);
});
