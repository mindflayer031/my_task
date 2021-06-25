select distinct(name) from invoices 

connect mysql workbanch 

constructor(arr){
                    this.array=arr;
                    this.index=0;
                }
                _read(){
                    if(this.index<=this.array.length){
                        array=this.array[this.index]
                    }
                    array.push()
                } 
                
                class streamArry extends Readable{
                constructor(arr){
                    super();
                    this.array=arr;
                    this.index=0;
                }
                _read(){
                    if(this.index<=this.array.length){                        
                        const chunk=this.array[this.index]
                        this.push(chunk);   
                        this.index +=1;
                        // console.log(chunk);
                    }
                    else{                        
                        this.push(null);
                    }
                }
            }



             // function sliceArrayIntoGroups(arr, size) {
                    //     var arreCount=0;
                    //     if (arr.length === 0) { return arr; }
                    //     return [ arr.slice(0, size), ...sliceArrayIntoGroups( 
                    //         arr.slice(size),
                    //         size   
                    //          )];
                    //   }

                    var i,j,temparray,chunk = 100;
                for (i=0,j=data.length; i<j; i+=chunk) {
                    temparray = data.slice(i,i+chunk);
                // do whatever
                }
                
                console.log(temparray);


                const animals = [
  ['id', 'name', 'rollno'],
  [1, 'name', 100],
  [2, 'name', 100],
  [3, 'name', 100],
  [4, 'name', 100],
  [5, 'name', 100],
  [6, 'name', 100],
  [7, 'name', 100],
  [9, 'name', 100],
    [10, 'name', 100],
];
chunk = 5; take = 100; start = 0; end = 100;
console.log(animals.slice(0, 100));
0 + 100;


if(arrayData.length>0){
                //     count+=1;
                //     if(arrayData.length==invoice_Da.length){
                //         exit();
                //     }
                // };


  // const readStream=fs.createReadStream("array.txt",{objectMode:true},'utf8');
            // const writeStreamArray=fs.createWriteStream("Array2.txt");
            // readStream.on('data',(data)=>{
            //     console.log(data.toString);
            //     // writeStreamArray.write(chunk + '\n');
            // })
            // readStream.on('error',(err)=>{
            //     console.log(err);
            // })


// class streamArry extends Readable{
            //     constructor(arr){
            //         super({encoding:'UTF8'});
            //         this.array=arr;
            //         this.index=0;
            //     }
            //     _read(){
            //         if(this.index<this.array.length){                        
            //             const chunk=this.array[this.index]
            //             this.push(chunk);   
            //             this.index +=1;
            //             console.log(chunk);
            //         }
            //         else{                        
            //             this.push(null);
            //         }
            //     }
            // }
            // console.log(arrayData);

               // const readstream=new streamArry(StoreData);
            // // const writestream= fs.createWriteStream("Array.txt");
            // const writestream=fs.writeFile("array.txt",StoreData,(err)=>{})
            // // StoreData.forEach(function(v)
            // // {  
            // //     writestream.write( StoreData + '\n'); 
            // // });
            // readstream.on('data','string',(datas)=>{
            //     writestream.write( datas + '\n'); 
            // })
            // writestream.on('error',function(err){
            //     console.log("failed");
            //     res.end(err);
            // })


            
//recursive function
function writeFileChunk(invoice_Da,s,e,c) {
    var arrayData=[];
    start=s;
    end=e;
    count=c;
    console.log("start:",start,"end:",end,"count:",count);
    if(invoice_Da.length>0)
    {   
        arrayDa=invoice_Da.slice(start,end);
        arrayData.push("\n");
        arrayData.push("class:",count);
        arrayData.push(arrayDa);    // JSON.stringify
        fs.appendFile("array.txt",JSON.stringify(arrayData),(err)=>{
            if (err)
            console.log(err);
        });
        start+=2000;
        end+=2000;
        count+=1;
        writeFileChunk(invoice_Da,start,end,count);
    }
    else
    {
        return false;
    }
    return true;
    // writeFileChunk(invoice_Da);
}
 // console.log(div);
        // console.log(obj[div])
        // for (const items in obj[div]){
        //     // console.log(obj[div][items].rollno);
        //     data_TextFile={
        //         name:obj[div][items].name,
        //         rollno:obj[div][items].rollno
        //     }
        //     // name=obj[div][items].name,
        //     // rollno=obj[div][items].rollno
        //     data.push(data_TextFile);
        // }
        // console.log(data);
        // Invoice.bulkCreate(data)
        // .then((data)=>{
        //     console.log("data added");
        //     res.status(200).json({
        //         message:"Data added to database invoices"
        //     })
        // })
        // .catch((err)=>{
        //     console.log("errrrrrrr");
        //     res.status(400).json({
        //         message:"failed to add data to database",
        //         error:err
        //     })
        // })
        // objeeee=obj[div];
        // Object.entries(objeeee).map(items => {
        //         // console.log(items)
        //         // name=items.name;
        //         console.log(items.name);
        //       })
         // data_TextFile={
        //     name:obj[div].name
        // }

    // Object.entries(obj).map(item => {
    //     console.log(item)
    //   })
    //   Object.entries(obj).forEach(item => {
    //     console.log(item)
    //   })
    //   for (const item of Object.entries(obj)) {
    //         console.log(item.length)
    //   }
    // Invoice.bulkCreate(data)
    // .then((data)=>{
    //         console.log("data added");
    //         res.status(200).json({
    //             message:"Data added to database invoices"
    //         })
    //     })
    //     .catch((err)=>{
    //         console.log("errrrrrrr");
    //         res.status(400).json({
    //             message:"failed to add data to database",
    //             error:err
    //         })
    //     })
    