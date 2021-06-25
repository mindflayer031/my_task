const db = require("../models/index");
const buyer_seller_relation = db.Buyer_Seller_relation;

const create = (req, res) => {
    // // Validate request
    console.log(req.body);
     if (!req.body.buyerid) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const Buyer_seller_relation = {
      Buyer_ID: req.body.buyerid,
      Seller_ID: req.body.sellerid
    };
  
    // Save Tutorial in the database
    buyer_seller_relation.create(Buyer_seller_relation)
      .then(data => {
        res.send(data);
        console.log("data saved",data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Buyer_Seller_Relation."
        });
      });
  };

  
  module.exports={
    create
  }