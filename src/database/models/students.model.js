const { Schema } = require('mongoose');
const connection = require('../index');

const StudentSchema = new Schema({
    studentId:{
        type: String,
        unique: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    program: String
});

module.exports = connection.model('Student', StudentSchema)