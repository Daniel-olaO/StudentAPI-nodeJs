const res = require('express/lib/response');
const CoureRepository = require('../repositories/course.repository');

/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Success response in JSON
 */

const coureRepository = new CoureRepository();

module.exports = {
    addCourse: async(res, req, next)=>{
        try {
            const newCourse = await coureRepository.addCourse(req.body);

            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    getCourseById: async(req, res, next)=>{
        try {
            const course = await coureRepository.getCourseById(req.params.id)

            res.status(200).json(course)
        } catch (error) {
            next(error);
        }
    },
    getAllCoures: async(req, res, next)=>{
        try {
            const courses = await coureRepository.getAllCoures();

            res.status(200).json(courses)
        } catch (error) {
            next(error);
        }
    },
    updateCourseById: async(req, res, next)=>{
        try {
            const newCourse = await coureRepository.updateCourseById(req.body, req.params.id);

            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    deleteCourseById: async(req, res, next)=>{
        try {
            const deleteCourse = await coureRepository.deleteCourseById(req.params.id);

            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}