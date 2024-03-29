const joi = require('joi');

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Callback function
 * @return {Object} - Response in JSON
 */
exports.validateCourse = function(req, res, next) {
  const schema = joi.object({
    code: joi.string().required(),
    name: joi.string().required(),
    professor: joi.string().required(),
    program: joi.string().length(3).required(),
    description: joi.string().required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    const message = validation.error.message? validation.error.message :
      validation.error.details[0].message;

    return res.status(400).json({'message': message});
  }
  return next();
};
