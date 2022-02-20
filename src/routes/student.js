const express = require('express')
const studentController = require('../controllers/student.controls');
const validator = require('../validations/student');

const router = express.Router();

router.post('/addStudent', 
    validator.validateStudent,
    studentController.addStudent
);

router.get('/', studentController.getStudents);

router.get('/:id', studentController.getStudentById);

router.put('/updateStudent/:id',
    validator.validateStudent,
    studentController.updateStudent
);

router.delete('/deleteStudent/:id', studentController.deleteStudentById);

module.exports = router;