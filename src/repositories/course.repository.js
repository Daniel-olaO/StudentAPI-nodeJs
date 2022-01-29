const Courses = require('../models/course.model');

module.exports = class Course{
    async addCourse(courseData){
        try {
           const course = await Courses.create({
                code: courseData.code,
                name: courseData.name,
                professor: courseData.professor,
                program: courseData.professor
            });
            return course;
        } catch (error) {
         return JSON.stringify(errror);   
        }
    }
    async getAllCoures(){
        try {
            const courses = await Courses.findAll();

            return courses
        } catch (error) {
            return JSON.stringify(error);
        }
    }
    async getCourseById(id){
        try {
            const course = await Courses.findAll({
                where:{
                    codeId: id
                }
            });
            return course;
            
        } catch (error) {
            return JSON.stringify(error);
        }
    }
    async updateCourseById(courseData, id){
        try {
            await Courses.update({
                code: courseData.code,
                name: courseData.name,
                professor: courseData.professor,
                program: courseData.professor
            },{
                where:{
                    courseId: id
                }
            });
            return JSON.stringify({'message':`${courseData.code} updated successfully`});
        } catch (error) {
            return JSON.stringify(error);        
        }
    }
    async deleteCourseById(id){
        try {
            await Courses.destroy({
                where:{
                    courseId: id
                }
            });
            return JSON.stringify({'message': `Course ${code} deleted successfully`});
        } catch (error) {
            return JSON.stringify(error)
        }
    }
}