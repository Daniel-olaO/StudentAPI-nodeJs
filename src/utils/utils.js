const jwt = require("jsonwebtoken");

module.exports = {
    generateId: function(){
       let id =  Math.random().toString(36).substr(2, 9).toLocaleUpperCase(); 
       return id;
    },
    generateAccessToken: function(username) {
        return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}