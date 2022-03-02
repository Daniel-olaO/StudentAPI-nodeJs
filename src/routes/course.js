const express = require('express');
const courseController = require('../controllers/course.controls');
const validator = require('../validations/course');

const router = express.Router();

router.get('/', courseController.getAllCoures);

router.get('/:code', courseController.getCourseByCode);

router.post('/addCourse',
    validator.validateCourse,
    courseController.addCourse
);

router.put('/updateCourse/:code',
    validator.validateCourse,
    courseController.updateCourseByCode
);

router.delete('/deleteCourse/:code', courseController.deleteCourseByCode);

module.exports = router