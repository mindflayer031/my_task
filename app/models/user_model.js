module.exports = (sequelize, Sequelize) => {

    const USER = sequelize.define("user",{

    Business_Name: {
    
    type: Sequelize.STRING
    
    },
    PAN:{
        type: Sequelize.STRING,
        unique: 'actions_unique'
    },
    Address1: {
    
        type: Sequelize.STRING 
    
    },
    
    Address1: {
    
        type: Sequelize.STRING 
    
    },

    Address2: {
    
        type: Sequelize.STRING 
    
    },

    Entity_Type:{
        type: Sequelize.ENUM('BUYER', 'SELLER')
    },

    city:{
        type: Sequelize.STRING 
    },

    state:{
        type: Sequelize.STRING 
    },

    pincode:{
        type: Sequelize.INTEGER(12)  
    }
   
    });
    
    return USER;
    
    };
        

