const express = require("express");
const morgan=require('morgan');
const cors = require("cors");

const app = express();
global.__basedir = __dirname ;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header(
      "Access-Control-Allow-Header",
      "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if(req.method==='OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
  }
  next();
})
app.use(express.static('uploads'));

require("./app/routers/user_route")(app);
require("./app/routers/buyerSellerRelationRoutes")(app);
require("./app/routers/financeRoutes")(app);
require("./app/routers/invoiceRoute")(app);


const db = require("./app/models/index");
db.sequelize.sync({alter: true});

// db.sequelize.sync({ force: true }).then(() => {
// console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to swapnesh application." });
  //   console.log("Sever is running!....");
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});