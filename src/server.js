const express = require('express');
const dotenv = require('dotenv').config();
const { initialize } = require('./query/index.js');
const HTTP_PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res)=>{
    res.json({"message":"welcome to studentAPI"})
});

initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>console.log(`server running on port:${HTTP_PORT}`));
})
.catch(err=>{
    console.log(err);
})