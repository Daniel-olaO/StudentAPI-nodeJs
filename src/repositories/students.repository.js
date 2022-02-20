const { Student } = require('../config/db');
const { generateId } = require('../utils/utils')

module.exports = class StudentRepository{
    async addStudent(studentData) {
        let id = generateId();

        let newStudent = new Student({
            studentId: id,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            email: studentData.email,
            phone: studentData.phone,
            program: studentData.program,
        });
        await newStudent.save((err)=>{
            if (err) throw new Error(err);

            return newStudent;
        });
    }
    async getAllStudent(){
        Student.find().exec().then((students)=>{
            students = students.map(value=> value.toObject());

            return students;
        })
    }
    async getStudentById(id){
        Student.find({studentId: id}).exec().then((student)=>{
            student = student.map(value=> value.toObject());

            return student;
        })
    }
    async updateStudent(studentData, id) {
        Student.updateOne({studentId: id},
            {$set:{
                firstName: student.firstName,
                lastName: studentData.lastName,
                email: studentData.email,
                phone: studentData.phone,
                program: studentData.program,
            }}
        ).exec()
        .then(()=>`studentId ${id} updated successfully`);
    } 
    async deleteStudentById(id) {
        await Student.deleteOne({studentId: id})
        .exec()
        .then(()=>`studentId ${id} deleted successfully`);
    }
}