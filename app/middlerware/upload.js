const multer = require("multer");
const fs=require('fs');

const storage =multer.diskStorage({
    destination: function(req,file,cb){
        var dir = './uploads';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null,dir);
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});
const fileFilter =(req,file,cb)=>{
    // if(['xls','xlsx'].indexOf(file.originalname.split('.').length-1) === -1)
    if ( file.mimetype.includes("excel") || file.mimetype.includes("spreadsheetml") ) 
    {
        cb(null,true)           //accept it and store null will display an error
    }
    else
    {
    //reject a file
        console.log('file not stored');
        cb(null,false)          //accept file but not store it
    }
}
//const upload = multer({ dest: "uploads/" });
const upload=multer({
    storage: storage,
    fileFilter:fileFilter,
});

module.exports = upload;