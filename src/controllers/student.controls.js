const StudentRepository = require('../repositories/students.repository');


/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Success response in JSON
 */
const studentRepository = new StudentRepository()
module.exports = {
    addStudent: async(req, res, next)=>{
        try {
            const newStudent = await studentRepository.addStudent(req.body);
            res.status(201).json(newStudent);
        } catch (error) {
            next(error);
        }
    },
    getStudents: async(req, res, next)=>{
        try {
            const students = await studentRepository.getAllStudent();
            res.status(200).json(students);
        } catch (error) {
            next(error);
        }
    },
    getStudentById: async(req, res, next)=>{
        try {
            const student = await studentRepository.getStudentById(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            next(error);
        }
    },
    updateStudent: async(req, res, next)=>{
        try {
            const student = await studentRepository.updateStudent(req.body, req.params.id);
            res.status(201).json(student);
        } catch (error) {
            next(error);
        }
    },
    deleteStudentById: async(req, res, next)=>{
        try {
            await studentRepository.deleteStudentById(req.params.id);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}