const sequelize = require('../models/index');

module.exports = {
    initialize: async()=>{
        try{
            await sequelize.authenticate();
        }
        catch(error){
            console.log(error);
        }  
    }
}