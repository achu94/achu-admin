const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const { AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY }
    = require("./config/config");

const s3 = new S3({
    AWS_BUCKET_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY
});

// upload a file to s3

function uploadFile(file) {
    const fileStrem = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Body: fileStrem,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise();
}



exports.uploadFile = uploadFile;
