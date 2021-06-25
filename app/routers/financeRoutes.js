module.exports = app => {
    const finance = require("../controller/financeController");
    const upload=require("../middlerware/upload")
    
    var router = require("express").Router();

     // Create a new Tutorial
     router.post("/", upload.single("file"),finance.uploadFiles);

     router.get("/:id",finance.fetch);

     router.post("/update/:id",upload.single("file"),finance.update_file);

    app.use('/finance', router);

  };