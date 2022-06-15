//users route
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controls');

const router = express.Router();

router.post('/signup',  userController.createUser);
router.post('/login', userController.loginUser);
router.delete('/:username', userController.deleteUser);


module.exports = router;