const StudentRepository = require('../repositories/students.repository');
const CourseRepository = require('../repositories/courses.repository');


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
    addStudent: async(req, res, next)=>{
        try {
            const newStudent = await studentRepository.addStudent(req.body);
            if(newStudent.studentId){
                res.status(201).json(newStudent);
            }
            else{
                res.status(409).json({"message": newStudent});
            }
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getStudents: async(req, res, next)=>{
        try {
            const students = await studentRepository.getAllStudent();
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getStudentById: async(req, res, next)=>{
        try {
            const student = await studentRepository.getStudentById(req.params.id);
            if(student.studentId){
                res.status(200).json(student);
            }
            else{
                res.status(404).json({"message": student});
            }
        } catch (error) {
            next(error);
        }
    },
    updateStudent: async(req, res, next)=>{
        try {
            const student = await studentRepository.updateStudent(req.body, req.params.id);
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    deleteStudentById: async(req, res, next)=>{
        try {
            await studentRepository.deleteStudentById(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json(error);
        }
    },
    takeCouse: async(req, res, next)=>{
        try{
            const course = await courseRepository.getCourseByCode(req.params.code);
            if(course.code){
                const student = await studentRepository.takeCouse(req.params.id, course);
                res.status(202).json(student);
            }
        }
        catch(error){
            res.status(400).json(error);
        }
    },
    dropCouse: async(req, res, next)=>{
        try{
            const result = await studentRepository.dropCouse(req.params.id, req.params.code);
            res.status(202).json(result);
        }
        catch(error){
            res.status(400).json(error);
        }
    }
}