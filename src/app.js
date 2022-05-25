const dotenv = require('dotenv').config();
const HTTP_PORT = process.env.PORT || 8000;
const server = require('./server');


server.listen(HTTP_PORT, ()=>console.log(`server running on port: ${HTTP_PORT}`));
