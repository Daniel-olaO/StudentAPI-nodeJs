const express = require('express');
const courseController = require('../controllers/course.controls');
const validator = require('../validations/course');

const router = express.Router();

router.get('/', courseController.getAllCoures);

router.get('/:id', courseController.getCourseById);

router.post('/addCourse',
    validator.validateCourse,
    courseController.addCourse
);

router.put('/updateCourse/:id',
    validator.validateCourse,
    courseController.updateCourseById
);

router.delete('/deleteCourse/:id', courseController.deleteCourseById);

module.exports = router