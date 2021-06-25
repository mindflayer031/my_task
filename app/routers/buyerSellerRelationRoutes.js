module.exports = app => {
    const buyerSellerRel = require("../controller/buyerSellerRencontrol");

    var router = require("express").Router();

     // Create a new Tutorial
     router.post("/", buyerSellerRel.create);

     

    //  router.get("/",employee.fetch);
     
    app.use('/buyerSellerRel', router);

  };