const S3 = require("aws-sdk/clients/s3");
require("dotenv").config();
const fs = require("fs");

const accessKeyId = process.env.S3_ACCESS;
const secretAccessKey = process.env.S3_SECRET;
const bucket = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucket,
    Body: fileStream,
    Key: file.filename + ".jpg",
  };
  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;

//1. image 테이블 넣는거  왜 아무값도 안 들어가는지 물어보기
//2 . s3 에 사진 올리고 난 뒤 응답받고 axios1 실행하기.
