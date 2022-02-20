<<<<<<< HEAD
const CourseRepository = require('../repositories/courses.repository');
=======
const { addCourse, 
        getAllCoures,
        updateCourseById,
        deleteCourseById 
} = require('../repositories/course.repository');
>>>>>>> f86d28d1f93e64230abff7e2c9ff7b2cc25052bf

/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @param {ErrorRequestHandler} err - Error object
 * @returns {Object} - Success response in JSON
 */

<<<<<<< HEAD
const courseRepository = new CourseRepository()
module.exports = {
    addCourse: async(req, res, next)=>{
        try {
            const newCourse = await courseRepository.addCourse(req.body);
=======

module.exports = {
    addCourse: async(req, res, next)=>{
        try {
            const newCourse = await addCourse(req.body);
>>>>>>> f86d28d1f93e64230abff7e2c9ff7b2cc25052bf
            res.status(201).json(newCourse);
        } catch (error) {
            // console.log(error)
            next(error);
        }
    },
    getCourseById: async(req, res, next)=>{
        try {
            const course = await getCourseById(req.params.id)

            res.status(200).json(course)
        } catch (error) {
            next(error);
        }
    },
    getAllCoures: async(req, res, next)=>{
        try {
            const courses = await getAllCoures();

            res.status(200).json(courses)
        } catch (error) {
            next(error);
        }
    },
    updateCourseById: async(req, res, next)=>{
        try {
            const newCourse = await updateCourseById(req.body, req.params.id);

            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    deleteCourseById: async(req, res, next)=>{
        try {
            const deleteCourse = await deleteCourseById(req.params.id);

            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}