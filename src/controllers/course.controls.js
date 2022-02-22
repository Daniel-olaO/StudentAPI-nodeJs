const CourseRepository = require('../repositories/courses.repository');

/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @param {ErrorRequestHandler} err - Error object
 * @returns {Object} - Success response in JSON
 */

const courseRepository = new CourseRepository()
module.exports = {
    addCourse: async(req, res, next)=>{
        try {
            const newCourse = await courseRepository.addCourse(req.body);
            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    getCourseById: async(req, res, next)=>{
        try {
            const course = await courseRepository.getCourseById(req.params.id)
            res.status(200).json(course)
        } catch (error) {
            next(error);
        }
    },
    getAllCoures: async(req, res, next)=>{
        try {
            const courses = await courseRepository.getAllCourses();
            res.status(200).json(courses)
        } catch (error) {
            next(error);
        }
    },
    updateCourseById: async(req, res, next)=>{
        try {
            const newCourse = await courseRepository.updateCourseById(req.body, req.params.id);
            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    deleteCourseById: async(req, res, next)=>{
        try {
            await courseRepository.deleteCourseById(req.params.id);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}