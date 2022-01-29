
module.exports = {
    generateId: function(){
       let id =  Math.random().toString(36).substr(2, 9).toLocaleUpperCase(); 
       return id;
    }
}