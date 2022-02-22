const Model = require('../database/models/courses.model');
const { generateId } = require('../utils/utils')

module.exports = class CourseRepository{
    async addCourse(courseData) {
        let id = generateId()
        const newCourse = new Model({
            courseId: id,
            code: courseData.code,
            name: courseData.name,
            professor: courseData.professor,
            program: courseData.program
        });   
        try{
            const data = await newCourse.save();
            return data;
        }
        catch(error){
            if(error.code === 11000){
                return `courseId: ${courseData.courseId} already exits`;
            }
            console.log(error);
            return error.message;
        }
    }
    async getCourseById(id) {
         try{
            const data = await Model.findById(id);
            return data;
        }
        catch(error){
            console.log(error)
            return error.message;
        }
    }
    async getAllCourses(){
        try {
            const data = await Model.find();
            return data;
        }
        catch (err) {
            console.log(err);
            return err.message;
        }
    }
    async updateCourseById(courseData, id) {
         try {
            const options = { new: true };
            const result = await Model.findByIdAndUpdate(id, courseData, options);

            return result;
        }
        catch (err) {
            console.log(err);
            return err.message;
        }
    }
    async deleteCourseById(id) {
       try{
           const data = await Model.findByIdAndDelete(id);
           return data;
       }
       catch(err) {
           console.log(err);
           return err.message;
       }
    }
}