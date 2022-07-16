const express = require('express')
const studentController = require('../controllers/student.controls');
const { authenticateToken } = require('../controllers/user.controls');
const validator = require('../validations/student');

const router = express.Router();

router.post('/addStudent',
    // authenticateToken,
    validator.validateStudent,
    studentController.addStudent
);
router.get('/', 
    authenticateToken,
    studentController.getStudents
);
router.get('/:id',
    authenticateToken,
    studentController.getStudentById
);
router.put('/updateStudent/:id',
    authenticateToken,
    validator.validateStudent,
    studentController.updateStudent
);
router.put('/:id/takeCourse/:code', 
    authenticateToken,
    studentController.takeCouse
);
router.put('/:id/dropCourse/:code',
    authenticateToken,
    studentController.dropCouse
);
router.delete('/deleteStudent/:id',
    authenticateToken,
    studentController.deleteStudentById
);

module.exports = router;