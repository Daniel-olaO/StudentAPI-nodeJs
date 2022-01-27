const sequelize = require('../models/index');


module.exports = {
    initialize: ()=>{
        return new Promise((resolve, reject)=>{
            sequelize.authenticate().then(()=>{
              console.log("postgress connection was successful");
              resolve();
            }).catch((err)=>{
                reject(err);
            });
        })
    }
}