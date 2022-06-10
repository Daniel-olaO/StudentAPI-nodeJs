const Model = require('../database/models/courses.model');
const { generateId } = require('../utils/utils')

module.exports = class CourseRepository{
    async addCourse(courseData) {
        const newCourse = new Model({
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
            console.error(error);
        }
    }
    async getCourseByCode(code) {
         try{
            const data = await Model.findOne({code: code});
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    async getAllCourses(){
        try {
            const data = await Model.find();
            return data;
        }
        catch (err) {            
            console.error(err);
        }
    }
    async updateCourseByCode(courseData, code) {
         try {
            const options = { new: true };
            const result = await Model.findOneAndUpdate(code, courseData, options);

            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteCourseByCode(code) {
       try{
           const data = await Model.findByIdAndDelete(code);
           return data;
       }
       catch(err) {
           console.log(err);
       }
    }
}