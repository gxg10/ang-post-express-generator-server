var express = require('express');
const bodyParser = require('body-parser');

var uploadRouter = express.Router();

const db = require('../config/db.config.js');
const File = db.files;

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const txtFile = (req, file, cb) => {
    if(!file.originalname.match(/\.(txt)$/)) {
        return cb(new Error('poti uploada doar fisiere txt'),false);
    }
    cb(null, true);
};

const upload = multer({storage: storage, fileFilter: txtFile});
uploadRouter.use(bodyParser.json());

uploadRouter.route('/')
.get((req,res,next)=>{
    res.statusCode = 403;
    res.end('get operation is not supported on /txtUpload');
})
.post(upload.single('txtFileFilter'), (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(req.file);
    path = req.file.path;
    console.log('upload completed for '+path);
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('put operation is not supported on /txtUpload');
})
.delete((req,res,next)=>{
    res.statusCode = 403;
    res.end('delete operaiton is not supported on /txtupload');
});

module.exports = uploadRouter;