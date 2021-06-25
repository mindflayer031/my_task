module.exports = (sequelize, Sequelize) => {

    const invoice = sequelize.define("invoice",{
        name:{
            type: Sequelize.STRING
        },
        rollno:{
            type: Sequelize.INTEGER
        },
        // path:{
        //     type: Sequelize.STRING
        // }
        // address:{
        //     type:Sequelize.STRING,
        // },
        // email:{
        //     type:Sequelize.STRING,
        // },
        // number:{
        //     type:Sequelize.INTEGER,
        // },
        // entity_type:{
        //     type:Sequelize.ENUM('BUYER', 'SELLER')
        // }
    });

    return invoice

}