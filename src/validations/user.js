const joi = require('joi')

/**
 * Validates the request payload sent for retrieving records from the records collection
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Response in JSON
 */
exports.validateUser = function(req, res, next){
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
        rePassword: joi.string().required(),
        email: joi.string().email().required(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
    const message = validation.error.message? validation.error.message
      : validation.error.details[0].message;

      return res.status(400).json({message: message});
    }
    return next();

}