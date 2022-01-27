const Courses = require('../models/course.model');

export class Course{
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
    async getCourseByCode(code){
        try {
            const course = await Courses.findAll({
                where:{
                    code: code
                }
            });
            return course;
            
        } catch (error) {
            return JSON.stringify(error);
        }
    }
    async updateCourse(courseData){
        try {
            await  Courses.update({
                name: courseData.name,
                professor: courseData.professor,
                program: courseData.professor
            },{
                where:{
                    code: courseData.code
                }
            });
            return JSON.stringify({'message':`${courseData.code} updated successfully`});
        } catch (error) {
            return JSON.stringify(error);        
        }
    }
    async deleteCourseByCode(code){
        try {
            await Courses.destroy({
                where:{
                    code: code
                }
            });
            return JSON.stringify({'message': `Course ${code} deleted successfully`});
        } catch (error) {
            return JSON.stringify(error)
        }
    }
}