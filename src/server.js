const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course')
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

app.get('/api', (req, res)=>{
    res.status(200).json({"message":"welcome to studentAPI"})
});

module.exports = app;