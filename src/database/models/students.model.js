const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../index');

const StudentSchema = new Schema({
  studentId: {
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
      type: mongoose.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

module.exports = connection.model('Student', StudentSchema);
