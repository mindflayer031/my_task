module.exports = app => {
    const invoice = require("../controller/invoiceControl");
    const upload=require("../middlerware/upload")
    
    var router = require("express").Router();

     // Create a new Tutorial
     router.post("/", upload.single("file"),invoice.uploadData);

     router.post("/fetchdata/:path",invoice.fetch); 
     
     router.post("/addtotxt",upload.single("file"),invoice.uploadDataToTxt); 

     router.get('/example',invoice.example);

    app.use('/invoice_data', router);

  };