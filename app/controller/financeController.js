const db = require("../models/index");
const readXlsxFile=require('read-excel-file');
const Finance = db.Finance;

const uploadFiles = (req, res) => {
  console.log(req.file);
  invoice={
    type:req.file.path,
    name:req.file.originalname
  }
  Finance.create(invoice)
  .then(result=>{
    res.status(200).json({
      message:'Data is added'
    })
  })
  .catch(err=>{
    res.status(500).json({
    message:'failed to add',
    error:err
    })
  });
};

const fetch= async(req,res)=>{
    const id=req.params.id;
    const finance = await Finance.findOne({ where: { id: id } })
    console.log(finance);
}

const update_file= async(req,res)=>{
    const id=req.params.id;
    // console.log(req.file);
    
    const data={
        type:req.file.path,
        name:req.file.originalname,
        is_approved:req.body.is_approved
    };
    const finance = await Finance.update(data,{ where: { id: id } })
    .then(num => {
          res.send({
            message: "Updated successfully."
          });
        })
      .catch(err => {
        res.status(500).send({
          message: "Error Updating with id=" + id
        });
      });
}


module.exports = {
  uploadFiles,
  fetch,
  update_file
};