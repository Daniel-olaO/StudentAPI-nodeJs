//user controllers
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const  UserRepository = require('../repositories/user.repository');
const { generateAccessToken } = require('../utils/utils');

/**
 * Controllers functions that handle user related requests
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {Function} next - Callback function
 * @returns {Object} - Response object
 */

//mddleware for JWT



const uerRepository = new UserRepository(); 

module.exports = {
    createUser: async(req, res, next) => {
        try {
            const user = await uerRepository.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    loginUser: async(req, res, next) => {
        try {
            const user = await uerRepository.loginUser(req.body);
            
            if (user) {
                const token = generateAccessToken({ username: user });
                const response = {
                    user,
                    token
                }
                res.status(200).json(response);
            } else {
                res.status(401).json({
                    "message": "Invalid username or password"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    deleteUser: async(req, res, next) => {
        try {
            await uerRepository.deleteUser(req.params.id);
            res.status(204).json({"message": "User deleted successfully"});
        } catch (error) {
            res.status(400).send(error);    
        }
    },
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            console.log(err);
            if (err) return res.sendStatus(403);
            req.user = user
            next()
        })
    }
}