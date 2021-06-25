module.exports = (sequelize, Sequelize) => {

    const Finance_Invoice = sequelize.define("finance_Invoice",{
        name:{
            type: Sequelize.STRING
        },
       rollno:{
            // type:Sequelize.BOOLEAN,
            // defaultValue: false
            type:Sequelize.INTEGER
        }
    });

    return Finance_Invoice

}