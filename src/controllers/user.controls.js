//user controllers
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const  UserRepository = require('../repositories/user.repository');

/**
 * Controllers functions that handle user related requests
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {Function} next - Callback function
 * @returns {Object} - Response object
 */

//mddleware for JWT
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    
    if (jwt_payload.id) {
        next(null, { id: jwt_payload.id, name: jwt_payload.name });
    } else {
        next(null, false);
    }
});

const uerRepository = new UserRepository(); 

module.exports = {
    createUser: async(req, res, next) => {
        try {
            const user = await uerRepository.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(409).send({ error: error });
        }
    },
    loginUser: async(req, res, next) => {
        try {
            const user = await uerRepository.loginUser(req.body);
            console.log(user);
            if (user.username) {
                let payload = {
                    _id: user._id,
                    username: user.username,
                }
                let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });           
                res.status(200).json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: user
                });
            }
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    },
    deleteUser: async(req, res, next) => {
        try {
            await uerRepository.deleteUser(req.params.id);
            res.status(204).json({"message": "User deleted successfully"});
        } catch (error) {
            res.status(404).send(error);    
        }
    }
}