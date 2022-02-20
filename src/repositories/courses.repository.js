const { Course } = require('../models/courses.model');

module.exports = class CourseRepository{
    async addCourse(courseData) {
        let newCourse = new Course({
            code: courseData.code,
            name: courseData.name,
            professor: courseData.professor,
            program: courseData.program
        });
        console.log(newCourse)
        await newCourse.save((err)=>{
            if (err) throw new Error("course couldn't be saved");
            console.log("saved");
            return newCourse;
        });
    }
    async getCourseById(id) {
        Course.find({courseId: id})
        .exec()
        .then((course)=>{
            course = course.map(value => value.toObject());
            return course;
        })
    }
    async getAllCourses(){
        Course.find().exec().then((courses)=>{
            course = courses.map(value => value.toObject());
            return courses;
        })
    }
    async updateCourseById(courseData, id) {
        Course.updateOne({courseId: id},
            {$set:{
                code: courseData.code,
                name: courseData.name,
                professor: courseData.professor,
                program: courseData.program
            }}
        ).exec()
        .then(()=> `course ${id} has been updated`);
    }
    async deleteCourseById(id) {
        await Course.deleteOne({courseId: id})
        .exec()
        .then(()=> `course ${id} has been deleted`);
    }
}