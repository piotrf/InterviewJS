import AWS from "aws-sdk";
import async from "async";
import Raven from "raven";
import RavenLambdaWrapper from "serverless-sentry-lib";


AWS.config.update({ region: "us-east-1" });
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });


export const gateway = RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
  console.log(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  callback(null, response);
});


const processKinesisRecord = (record, callback) => {
  console.log(record);
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

export const stream = RavenLambdaWrapper.handler(Raven, (event, context, callback) => {
  async.map(event.Records, processKinesisRecord, callback);
});
