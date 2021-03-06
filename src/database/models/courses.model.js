const { Schema } = require('mongoose');
const connection = require('../index');

const CourseSchema = new Schema({
    code: String,
    name: String,
    professor: String,
    program: String,
});
module.exports = connection.model('Course', CourseSchema);