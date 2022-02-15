const sequelize = require('../database/index');

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