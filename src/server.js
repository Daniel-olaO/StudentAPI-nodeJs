const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');
const userRoutes = require('./routes/user');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors('*'));

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);


app.get('/api', (req, res)=>{
    res.status(200).json({"message":"welcome to studentAPI"})
});

module.exports = app;