const dotenv = require('dotenv').config();
<<<<<<< HEAD
=======
const { initialize } = require('./repositories/index');
>>>>>>> f86d28d1f93e64230abff7e2c9ff7b2cc25052bf
const HTTP_PORT = process.env.PORT || 8080;
const server = require('./server');


server.listen(HTTP_PORT, ()=>console.log(`server running on port: ${HTTP_PORT}`));
