const express = require('express');
const courseController = require('../controllers/course.controls');
const { authenticateToken } = require('../controllers/user.controls');
const validator = require('../validations/course');

const router = express.Router();

router.get('/',
    authenticateToken,
    courseController.getAllCoures
);
router.get('/:code',
    authenticateToken,
    courseController.getCourseByCode
);

router.post('/addCourse',
    authenticateToken,
    validator.validateCourse,
    courseController.addCourse
);

router.put('/updateCourse/:code',
    authenticateToken,
    validator.validateCourse,
    courseController.updateCourseByCode
);

router.delete('/deleteCourse/:code',
    authenticateToken,
    courseController.deleteCourseByCode
);

module.exports = router