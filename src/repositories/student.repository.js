const Students = require('../models/student.model');
const { generateId } = require('../utils/utils');

module.exports = class Student{
    async addStudent(studentData){
        let id = generateId();

        try {
           const student = await Students.create({
                studentId: id,
                firstName: studentData.firstName,
                lastName: studentData.lastName,
                email: studentData.email,
                phone: studentData.phone,
                program: studentData.program,
                startDate: studentData.startDate  
            });
            return student;

        } catch (err) {
            return err;
        }
    }
    async getAllStudent(){ 
        try{
            const students = await Students.findAll();

            return students;
        }
        catch(err){
            return err;
        }
    }
    async getStudentById(id){
        try{
            const student = await Students.findAll({
                where:{
                    studentId: id
                }
            });
            return student;
        }
        catch(err){
            return err;
        }
    }
    async updateStudent(studentData, id){
        try{
            await Students.update({
                firstName: studentData.firstName,
                lastName: studentData.lastName,
                email: studentData.email,
                phone: studentData.phone,
                program: studentData.program,
                startDate: studentData.startDate
            },{
                where:{
                    studentId: id
                }
            });
            return JSON.stringify({'message':`${studentData.studentId} updated successfully`});
        }
        catch(err){
            return err;
        }
    }
    async deleteStudentById(id){
        try {
            await Students.destroy({
                where:{
                    studentId: id
                }
            });
            return JSON.stringify({'message': `student: ${id} deleted successfully`});
        } catch (err) {
            return err;
        }
    }
}