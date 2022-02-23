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
    getCourseByCode: async(req, res, next)=>{
        try {
            const course = await courseRepository.getCourseByCode(req.params.code);
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
    updateCourseByCode: async(req, res, next)=>{
        try {
            const newCourse = await courseRepository.updateCourseByCode(req.body, req.params.code);
            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    deleteCourseByCode: async(req, res, next)=>{
        try {
            await courseRepository.deleteCourseByCode(req.params.code);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}