const StudentRepository = require('../repositories/students.repository');
const CourseRepository = require('../repositories/courses.repository');
const Model = require('../database/models/students.model');
const {generateId} = require('../utils/utils');


/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Success response in JSON
 */
const studentRepository = new StudentRepository();
const courseRepository = new CourseRepository();
module.exports = {
  addStudent: async (req, res, next)=>{
    const id = generateId();
    console.log('id: ' + id);
    const newStudent = new Model({
      studentId: id,
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      email: studentData.email,
      phone: studentData.phone,
      program: studentData.program,
    });
    try {
      const newStudent = await newStudent.save();
      console.table(newStudent);
      if (newStudent.email) {
        return res.status(201).json({
          message: 'Student created successfully',
          student: newStudent,
        });
      } else {
        return res.status(400).json({'message': newStudent});
      }
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
      const course = await courseRepository.getCourseByCode(req.params.code);
      if (course.code) {
        const student = await studentRepository.takeCouse(
            req.params.id, course,
        );
        res.status(202).json(student);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
  dropCouse: async (req, res, next)=>{
    try {
      const result = await studentRepository.dropCouse(
          req.params.id, req.params.code,
      );
      res.status(202).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
