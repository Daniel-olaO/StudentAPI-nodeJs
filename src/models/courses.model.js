const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    code: String,
    name: String,
    professor: String,
    program: String,
});
module.exports = { CourseSchema };