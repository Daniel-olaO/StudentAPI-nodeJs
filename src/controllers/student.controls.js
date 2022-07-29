const Model = require('../database/models/students.model');
const {generateId} = require('../utils/utils');


/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Success response in JSON
 */

module.exports = {
  addStudent: async (req, res, next)=>{
    const id = generateId();
    const newStudent = new Model({
      studentId: id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      program: req.body.program,
    });
    try {
      const newStudent = await newStudent.save();
      return res.status(201).json({
        message: 'Student created successfully',
        student: newStudent,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getStudents: async (req, res, next)=>{
    try {
      const students = await Model.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getStudentById: async (req, res, next)=>{
    try {
      const student = await Model.findOne({studentId: req.params.id});
      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  },
  updateStudent: async (req, res, next)=>{
    try {
      const student = await Model.findByIdAndUpdate(
          req.params.id, req.body, {new: true},
      );
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteStudentById: async (req, res, next)=>{
    try {
      const deleteStudent = await Model.findOneAndDelete(
          {studentId: req.params.id},
      );
      res.status(204).send(deleteStudent);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  takeCouse: async (req, res, next)=>{
    try {
      const student = await Model.findOne({studentId: req.params.id});
      const course = await Model.findOne({code: req.params.code});
      student.courses.push(course._id);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  dropCouse: async (req, res, next)=>{
    try {
      const student = await Model.findOne({studentId: req.params.id});
      const course = await Model.findOne({code: req.params.code});
      student.courses.pull(course._id);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
