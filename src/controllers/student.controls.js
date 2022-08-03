const studentModel = require('../database/models/students.model');
const courseModel = require('../database/models/courses.model');
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
    const newStudent = new studentModel({
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
      const students = await studentModel.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getStudentById: async (req, res, next)=>{
    try {
      // const student = await Model.findOne({studentId: req.params.id});
      studentModel.aggregate([
        {$lookup: {
          from: 'courses',
          localField: 'courses',
          foreignField: '_id',
          as: 'courses_data',
        },
        },
        {$match: {
          studentId: req.params.id,
        },
        },
      ]).exec((err, result)=>{
        if (err) {
          next(err);
        } else {
          res.status(200).json(...result);
        }
      },
      );
      // res.status(200).json();
    } catch (error) {
      next(error);
    }
  },
  updateStudent: async (req, res, next)=>{
    try {
      const student = await studentModel.findByIdAndUpdate(
          req.params.id, req.body, {new: true},
      );
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteStudentById: async (req, res, next)=>{
    try {
      const deleteStudent = await studentModel.findOneAndDelete(
          {studentId: req.params.id},
      );
      res.status(204).send(deleteStudent);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  takeCouse: async (req, res, next)=>{
    try {
      const student = await studentModel.findOne({studentId: req.params.id});
      const course = await courseModel.findOne({code: req.params.code});
      student.courses.push(course._id);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  dropCouse: async (req, res, next)=>{
    try {
      const student = await studentModel.findOne({studentId: req.params.id});
      const course = await courseModel.findOne({code: req.params.code});
      student.courses.pull(course._id);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
