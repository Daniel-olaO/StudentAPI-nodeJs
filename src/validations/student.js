const joi = require('joi')

/**
 * Validates the request payload sent for retrieving records from the records collection
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @returns {Object} - Response in JSON
 */
exports.validateStudent = function(req, res, next){
    const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['ca'] } }).required(),
        phone: joi.string().length(10).pattern(/^[0-9]+$/).required(),
        program: joi.string().length(3).required(),
        // startDate: joi.date().required()
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
    const message = validation.error.message? validation.error.message : validation.error.details[0].message;
    console.log(message)

      return res.status(400).json(message);
    }
    return next();

}