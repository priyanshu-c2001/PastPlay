const { Readable } = require('stream');
const {ensureBucketReady}=require("../lib/gridFsConfig");
const Show=require("../models/shows");

function uploadPage(req, res){
    res.render("upload");
}

async function uploadVideo(req, res){
    const {bucketName, rating}=req.body;
    const name=await Show.findOne({showName: bucketName});
    if(name==null){
      await Show.create({
        showName:bucketName,
        ratings:rating,
      });
    }

    if (!req.file) {
        console.error('No file uploaded.');
        return res.status(400).send('No file uploaded.');
      }
    
      const fileName = `${req.file.originalname}`;
      console.log(fileName);
      const readableFileStream = new Readable();
      readableFileStream.push(req.file.buffer);
      readableFileStream.push(null);
    
      try{
        const gfsBucket=await ensureBucketReady(bucketName);
        const uploadStream = await gfsBucket.openUploadStream(fileName, {
          contentType: req.file.mimetype,
        });
      
        readableFileStream.pipe(uploadStream)
          .on('error', (error) => {
            console.error('Upload error:', error);
            return res.status(500).send('An error occurred while uploading the file.');
          })
          .on('finish', () => {
            console.log('File uploaded successfully:', uploadStream.id);
            res.redirect('/');
          });
      }
      catch(error){
        res.status(500).send("Error in uploading file: " + error.message);
      }
}

module.exports={
    uploadPage,
    uploadVideo,
}