const { S3Client } = require("@aws-sdk/client-s3");
require('dotenv').config();
console.log("This is aws-config file");

//configure the AWS SDK 

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
},
});

module.exports=s3Client;