const db = require("../models/index");
const readXlsxFile=require('read-excel-file/node');
const Readable=require('stream');
const fs=require('fs');
const Invoice = db.Invoice;

const uploadData = (req, res) => {
    if(req.file == undefined){
        return res.status(400).send("Please upload an excel file!");
    }
    else{
    console.log(req.file);
    
    try{
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            let filePath = __basedir+"/uploads/"+req.file.filename;
        }
        let filePath = __basedir +"/uploads/"+req.file.filename;
        console.log(filePath);
        readXlsxFile(filePath).then(rows => {
            // `rows` is an array of rows
            // each row being an array of cells.   
            // Remove Header ROW
            rows.shift();
            
            const invoice_Da = [];
    
            let length = rows.length;
    
            for(let i=0; i<length; i++){
    
                let invoice_d = {
                    name: rows[i][1],
                    rollno:rows[i][2],
                    path:req.file.path
                }
    
                invoice_Da.push(invoice_d);
            }
            
            
            Invoice.bulkCreate(invoice_Da)
            .then(() => {
                const result = {
                    status: "ok",
                    filename: req.file.originalname,
                    message: "Upload Successfully!",
                }
        
                res.json(result);
            });
        });
    }catch(error){
        const result = {
            status: "fail",
            filename: req.file.originalname,
            message: "Upload Error! message = " + error.message
        }
        res.json(result);
    }
    }       //else 
  };

const fetch= async(req,res)=>{
    const path=req.params.path;
    console.log("result",path);

    let readStream=fs.readFileSync(path,'utf8');
    obj=JSON.parse(readStream);
    // console.log(obj.class_1[0].name);
    var data_txt=[];
    // rows=readStream;
    // console.log(rows);
    length=Object.keys(obj);
    // console.log(length);
    
    for(const item in obj) {
        // console.log(item);
        // div=obj[item];
        obj[item].forEach(data => {
            // console.log(data.name,data.rollno);
            data_TextFile = {
                name: data.name,
                rollno: data.rollno
            }
                // name = data.name,
                // rollno = data.rollno
                data_txt.push(data_TextFile);
        });
        // console.log(data_txt);
    }
    // console.log(data_txt);
    Invoice.bulkCreate(data_txt)
    .then((result)=>{
        console.log("data added");
        res.status(200).json({
            message:"Data added to database invoices"
        })
    })
    .catch((err)=>{
        console.log("errrrrrrr");
        res.status(400).json({
            message:"failed to add data to database",
            error:err
        })
        console.log(err);
    })

}


const uploadDataToTxt=async(req,res)=>{
    if(req.file == undefined){
        return res.status(400).send("Please upload an excel file!");
    }
    else{
    console.log(req.file);
    
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            let filePath = __basedir+"/uploads/"+req.file.filename;
        }
        let filePath = __basedir+"/uploads/"+req.file.filename;
        console.log(filePath);
        readXlsxFile(filePath).then(rows => {
            rows.shift();
            const invoice_Da = [];
    
            let length = rows.length;
             
            for(let i=0; i<length; i++){        
                invoice_d={ 
                            id:rows[i][0],
                            name:rows[i][1],
                            rollno:rows[i][2],
                        }
                        invoice_Da.push(invoice_d);
            }
            // console.log(invoice_Da);
            StoreData=sliceData(invoice_Da);
            
            console.log(StoreData);
             if(StoreData==true){
                 res.status(200).json({
                     message:'data added to txt from excel'
                 })
             }
             else{
                res.status(400).json({
                    message:'data not found '
                })
             }
             Invoice.bulkCreate(invoice_Da);
            
        });
    
    }       //else 
}
const example=(req,res)=>{

    const doSomethingAsync = () => {
        return new Promise(resolve => {
          setTimeout(() => resolve('I did something'), 3000)
        })
      }
      
      const doSomething = async () => {
        console.log(await doSomethingAsync())
      }
      
      console.log('Before')
      doSomething()
      console.log('After')
}

function sliceData(data){
    var invoice_Da=data    
    var arrayData={};
    length=invoice_Da.length;
    inc=length/2;
    var start=0;
    var end=inc;
    var count=1;
    console.log(invoice_Da.length);    
        while(count<=2)
        {  
           
            console.log("start:",start,"end:",end,"count:",count);
            
            arrayDa=invoice_Da.slice(start,end);

            arrayData['class_'+count]= arrayDa;   
            // console.log(arrayData);
                                        // JSON.stringify
                fs.writeFile("array.txt",JSON.stringify(arrayData),(err)=>{
                    if (err)
                    console.log(err);
                })
                start+=inc;
                end+=inc;
                count+=1;
                       
        }
      
        return true;
}

function sample(){
    data=['1','2','3','4','5','6','7','8','9','10'];
    var a=[];
    var r=[];
    a=data.slice(0,6);
    r.push(a);
    a=data.slice(6,10);
    r.push(a);
    console.log(r);
}

  module.exports={
      uploadData,
      fetch,
      uploadDataToTxt,
      example
  }
   