const { Schema } = require('mongoose');

const studentSchema = new Schema({
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

module.exports = { studentSchema };