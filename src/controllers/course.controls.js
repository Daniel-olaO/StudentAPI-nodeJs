const Model = require('../database/models/courses.model');

/**
 * Controller function that etrieves the list of records based on date and count
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @param {ErrorRequestHandler} err - Error object
 * @returns {Object} - Success response in JSON
 */

// const courseRepository = new CourseRepository()
module.exports = {
    addCourse: async(req, res, next)=>{
        const courseData = new Model({
            code: courseData.code,
            name: courseData.name,
            professor: courseData.professor,
            program: courseData.program
        });
        try {
            const newCourse = await courseData.save();
            if(newCourse.code) {
                return res.status(201).json({
                    message: "Course created successfully",
                    course: newCourse
                });
            }
            else{
                return res.status(400).json({"message":newCourse});
            }
        } catch (error) {
            next(error);
        }
    },
    getCourseByCode: async(req, res, next)=>{
        try {
            const course = await Model.findOne({code: req.params.code});
            res.status(200).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    getAllCoures: async(req, res, next)=>{
        try {
            const courses = await Model.find();
            res.status(200).json(courses)
        } catch (error) {
            next(error);
        }
    },
    updateCourseByCode: async(req, res, next)=>{
        try {
            const newCourse = await Model.findOneAndUpdate(code, req.body, {new: true});
            res.status(201).json(newCourse);
        } catch (error) {
            next(error);
        }
    },
    deleteCourseByCode: async(req, res, next)=>{
        try {
            const course = await Model.findOneAndDelete({code: req.params.code});
            res.status(200).json(course);
        } catch (error) {
            next(error);
        }
    }
}