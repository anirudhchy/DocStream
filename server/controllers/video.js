const mongodb = require('mongodb')
const fs = require('fs')
const path = require('path');

const { uuid } = require('uuidv4');
const VideoMetaData = require('../models/VideoMetaData')
const  cloudinary = require('cloudinary').v2

const { StatusCodes } = require('http-status-codes')


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const getAllVideos = async (req,res) => {
  const videos = await VideoMetaData.find({})
  res.status(StatusCodes.OK).json({ videos })
}


const upload = async (req,res) => {
  const {params:{filename,imagename}} = req
  const uniqueFileNmae = uuid()
  const photoUrl = await cloudinary.uploader.upload(path.join(__dirname, `assets/${imagename}`));


  req.body.uniqueFileName = uniqueFileNmae
  req.body.photo = photoUrl.url
  VideoMetaData.create(req.body)



    mongodb.MongoClient.connect(process.env.MONGO_URI, function (error, client) {
        if (error) {
          res.json(error);
          return;
        }

        // connect to the videos database
        const db = client.db('Doc-Stream');
    
        // Create GridFS bucket to upload a large file
        const bucket = new mongodb.GridFSBucket(db);
    
        // create upload stream using GridFS bucket
        const videoUploadStream = bucket.openUploadStream(`${uniqueFileNmae}`);
    
        // You can put your file instead of bigbuck.mp4
        const videoReadStream = fs.createReadStream(path.join(__dirname, `assets/${filename}`));
    
        // Finally Upload!
        videoReadStream.pipe(videoUploadStream);
    
        // All done!
        res.status(200).send("Done...");
      });
}

const stream = (req,res) => {

    const {params:{videoid}} = req

    mongodb.MongoClient.connect(process.env.MONGO_URI, function (error, client) {
        if (error) {
          res.status(500).json(error);
          return;
        }
    
        // Check for range headers to find our start time
        const range = req.headers.range;
        if (!range) {
          res.status(400).send("Requires Range header");
        }
    
        const db = client.db('Doc-Stream');
        // GridFS Collection
        db.collection('fs.files').findOne({filename:`${videoid}`}, (err, video) => {
          if (!video) {
            res.status(404).send("No video uploaded!");
            return;
          }
    
          // Create response headers
          const videoSize = video.length;
          const start = Number(range.replace(/\D/g, ""));
          const end = videoSize - 1;
    
          const contentLength = end - start + 1;
          const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
          };
    
          // HTTP Status 206 for Partial Content
          res.writeHead(206, headers);
    
          // Get the bucket and download stream from GridFS
          const bucket = new mongodb.GridFSBucket(db);
          const downloadStream = bucket.openDownloadStreamByName(`${videoid}`, {
            start
          });
    
          // Finally pipe video to response
          downloadStream.pipe(res);
        });
      });

}



module.exports = {
    stream,
    upload,
    getAllVideos,
}