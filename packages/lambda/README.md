# InterviewJS Lambda Functions

### Publish story

Example S3 notification on story publishing:

```json

{
    "Records": [
        {
            "eventVersion": "2.0",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "2018-04-03T05:04:23.369Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
                "principalId": "AWS:AROAIFY72UPFT6TBIOXTI:CognitoIdentityCredentials"
            },
            "requestParameters": {
                "sourceIPAddress": "175.158.49.118"
            },
            "responseElements": {
                "x-amz-request-id": "F77BCF721317FB6F",
                "x-amz-id-2": "P8gcPsUAgZRAjFph19FUKWtJDcRj6RJz1cNC239fxKNMcIF3gRgFVAFzokZ6uEJcmiSTxNdHv3s="
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "db739a99-d745-4b4d-a7c3-cdb444f2a5c5",
                "bucket": {
                    "name": "data.interviewjs.io",
                    "ownerIdentity": {
                        "principalId": "A2BB5WDB97W2YW"
                    },
                    "arn": "arn:aws:s3:::data.interviewjs.io"
                },
                "object": {
                    "key": "public/stories/us-east-1%3A2a8be90d-9960-406e-b6fc-1fb77cf81871/cb7bf1fe-877a-4de2-aef1-11d5f0bf24f8/story.json",
                    "size": 345197,
                    "eTag": "ea9387a51a0a850a6af7b71482698801",
                    "sequencer": "005AC30B572E7487C0"
                }
            }
        }
    ]
}
```

Note: the publishId (for example) `7vCbTFZtybji6ZYcY4MWt2` is generated as short UUIDv5 out of UUID part of the userId `(us-east-1:)2a8be90d-9960-406e-b6fc-1fb77cf81871` as namespace and the storyId `cb7bf1fe-877a-4de2-aef1-11d5f0bf24f8` (where storyId can be in short UUID format too).
