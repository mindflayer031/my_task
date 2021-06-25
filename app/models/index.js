const dbConfig = require("../config/db.congif");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
    logging: false
  });
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.User = require("./user_model")(sequelize, Sequelize);
  db.Buyer_Seller_relation=require("./relation")(sequelize, Sequelize);
  db.Finance=require("./financeModel")(sequelize, Sequelize);
  db.Invoice=require("./invoice")(sequelize, Sequelize);

  //relation for buyer
  db.User.hasMany(db.Buyer_Seller_relation,{
    foreignKey: {
      name: 'Buyer_ID'
    },
     as: 'buyer' 
    });
   db.Buyer_Seller_relation.belongsTo(db.User,{
    foreignKey: {
        name: 'Buyer_ID'
    },
     as: 'buyer' 
});

//relation for seller
db.User.hasMany(db.Buyer_Seller_relation,{
    foreignKey: {
      name: 'Seller_ID'
    },
     as: 'seller' 
    });
   db.Buyer_Seller_relation.belongsTo(db.User,{
    foreignKey: {
        name: 'Seller_ID'
    },
     as: 'seller' 
});


  module.exports = db;

