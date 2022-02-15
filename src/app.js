const dotenv = require('dotenv').config();
const { initialize } = require('./repositories/index');
const HTTP_PORT = process.env.PORT || 8080;
const server = require('./server');


server.listen(HTTP_PORT, async()=>{
    try {
        await initialize();
        console.log(`server running on port:${HTTP_PORT} and connected to postgres`); 
        
    } catch (error) {
        console.log("unable to start server: " + error);
    }
});
