const { models } = require('../database');

module.exports = {
    addCourse: async(courseData)=>{
        console.log(models)
        try {
           const course = await models.Courses.create({
                code: courseData.code,
                name: courseData.name,
                professor: courseData.professor,
                program: courseData.program
            });
            // console.log(course)
            return course;
        } catch (error) {
            console.log(error)
         return JSON.stringify(error);   
        }
    },
    getAllCoures: async()=>{
        try {
            const courses = await   models.course.findAll();
            return courses
        } catch (error) {
            console.log(error)
            return JSON.stringify(error);
        }
    },
    getCourseById: async(id)=>{
        try {
            const course = await sequelize.models.course.findAll({
                where:{
                    codeId: id
                }
            });
            return course;
            
        } catch (error) {
            return JSON.stringify(error);
        }
    },
    updateCourseById: async(courseData, id)=>{
        try {
            await sequelize.models.course.update({
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
    },
    deleteCourseById: async(id)=>{
        try {
            await sequelize.models.course.destroy({
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