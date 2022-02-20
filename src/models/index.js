const CourseSchema = require('./courses.model');
const StudentSchema = require('./students.model');
const connection = require('../config/db');

const Course = connection.model('Course', CourseSchema);
const Student = connection.model('Student', StudentSchema);

module.exports = {
  Course,
  Student
};