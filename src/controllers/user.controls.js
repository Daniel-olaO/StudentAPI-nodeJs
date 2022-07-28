// user controllers
const jwt = require('jsonwebtoken');
const Model = require('../database/models/users.model');
const bcrypt = require('bcrypt');
const {generateAccessToken,
  generateRefreshAccessToken} = require('../utils/utils');

/**
 * Controllers functions that handle user related requests
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {Function} next - Callback function
 * @returns {Object} - Response object
 */

// mddleware for JWT


// const uerRepository = new UserRepository();

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const user = await Model.create(req.body);
      if (user.email) {
        return res.status(201).json({
          message: 'User created successfully',
          user: user,
        });
      } else {
        return res.status(400).json({'message': user});
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const user = await Model.findOne({username: req.body.username});

      if (user) {
        const isPasswordValid = await bcrypt.compare(
            req.body.password, user.password,
        );
        if (isPasswordValid) {
          const accessToken = generateAccessToken(user.username);
          const refreshToken = generateRefreshAccessToken(user.username);
          return res.status(200).json({
            message: 'User logged in successfully',
            user: user.username,
            token: accessToken,
            refreshToken: refreshToken,
          });
        } else {
          return res.status(400).json({
            message: 'Invalid password',
          });
        }
      } else {
        res.status(401).json({
          'message': 'Invalid username or password',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const user = await Model.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  authenticateToken: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },
};
