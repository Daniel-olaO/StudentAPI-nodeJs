const Model = require('../database/models/students.model');
const { generateId } = require('../utils/utils')

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
                return `studentId: ${studentData.studentId} already exits`;
            }
            console.log(error);
            return error.message;
        }
    }
    async getAllStudent(){
        try{
            const data = await Model.find();
            return data;
        }
        catch(error){
            console.log(error);
            return error.message;
        }
    }
    async getStudentById(id){
        try{
            const data = await Model.findById(id);
            return data;
        }
        catch(error){
            console.log(error);
            return error.message;
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
            return error.message;
        }
    } 
    async deleteStudentById(id) {
        try{
            const data = await Model.findByIdAndDelete(id);
            return data
        }
        catch (error) {
            console.log(error);
            return error.message;
        }
    }
}