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
    program: String,
    courses: [
        {
            _id: false,
            code: String,
            name: String,
            professor: String,
        
        },
    ]
});

module.exports = connection.model('Student', StudentSchema)