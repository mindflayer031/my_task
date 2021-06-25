module.exports = app => {
    const user = require("../controller/user_controller");

    var router = require("express").Router();

     // Create a new Tutorial
     router.post("/", user.create);

     router.get("/:pan",user.fetch);
     
    app.use('/user', router);

  };