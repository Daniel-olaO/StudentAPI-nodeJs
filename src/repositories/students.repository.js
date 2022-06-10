const Model = require('../database/models/students.model');
const { generateId } = require('../utils/utils');

module.exports = class StudentRepository{
    async addStudent(studentData) {
        let id = generateId();

        const newStudent = new Model({
            studentId: id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            phone: studentData.phone,
            program: studentData.program,
        });
        try{
            const data = await newStudent.save();
            return data;
        }
        catch(error){
            if(error.code === 11000){
                console.log(`studentId: ${studentData.studentId} already exits`);
            }
            console.error(error);
        }
    }
    async getAllStudent(){
        try{
            const data = await Model.find();
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    async getStudentById(id){
        try{
            const data = await Model.findOne({studentId: id});
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    async updateStudent(studentData, id) {
        try {
            const options = { 
                new: true
            }
            const result = await Model.findByIdAndUpdate(id, StudentData, options);
            return result
        }
        catch (error) {
            console.log(error);
        }
    } 
    async deleteStudentById(id) {
        try{
            const data = await Model.findOneAndDelete({studentId:id});
            return data
        }
        catch (error) {
            console.log(error);
        }
    }
    async takeCouse(id, courseData){
        try{   
            const data = await Model.findOneAndUpdate({
                studentId: id
            },
            {$addToSet: {
                courses: {
                    "code": courseData.code,
                    "name": courseData.name,
                    "professor": courseData.professor
                }
            }});
            return data;
        }
        catch (err) {
            if(err.code === 11000)
                console.log(`${courseData.code} has already been added`);
            console.log(err);
        }
    }
    async dropCouse(id, courseCode){
        try{
            const data = await Model.findOneAndUpdate({
                studentId: id
            },
            {"$pull":{
                "courses": [{"code": courseCode}]
            }}, { multi:true });
            return data;
        }
        catch(err){
            console.log(err);
        }
    }
}