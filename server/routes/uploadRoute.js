const express=require("express");
const multer = require('multer');
const {uploadPage, uploadVideo}=require("../controller/uploadController");

const uploadRouter=express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

uploadRouter.route("/upload").get(uploadPage).post(upload.single('file'), uploadVideo);

module.exports={
    uploadRouter,
}
