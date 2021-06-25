const db = require("../models/index");
const User = db.User;
const Buyer_Seller_relation = db.Buyer_Seller_relation;

const create = (req, res) => {
    // // Validate request
    console.log(req.body);
     if (!req.body.pan) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const user = {
      Business_Name: req.body.name,
      PAN: req.body.pan,
      Address1:req.body.address1,
      Address2:req.body.address2,
      Entity_Type:req.body.Entity_type,
      city:req.body.city,
      state:req.body.state,
      pincode:req.body.pincode
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
        console.log("data saved",data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the USER."
        });
      });
  };

  const fetch= async(req,res)=>{
    const pan=req.params.pan;
    const user = await User.findOne({ where: { PAN: pan } })
    //res.send(user);
    // console.log(users.id);
    if(user) {
      const where = {};
      const include = {
        model: User
      }
      if(user.Entity_Type === 'BUYER') {
        where['Buyer_ID'] = user.id;
        include['as'] = 'seller';
      }else {
        where['Seller_ID'] = user.id;
        include['as'] = 'buyer';
      }
  
      const buyerSellerRelation = await Buyer_Seller_relation.findAll({
        where: where,
        include
      });
      console.log(buyerSellerRelation);
      res.send(buyerSellerRelation)
    }
    res.send({'message': 'No user'});
  };

  module.exports={
    create,
    fetch
  }