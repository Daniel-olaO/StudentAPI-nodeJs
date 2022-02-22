const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course')
const express = require('express');
const app = express();

app.use(express.json());

app.use('/v1/students', studentRoutes);
app.use('/v1/courses', courseRoutes);

app.get('/v1', (req, res)=>{
    res.status(200).json({"message":"welcome to studentAPI"})
});

module.exports = app;