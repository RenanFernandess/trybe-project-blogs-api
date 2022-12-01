const Joi = require('joi');

const ERROR_MESSAGE = 'Some required fields are missing';

const checkLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
}).required().messages({
  'any.required': ERROR_MESSAGE,
  'string.email': ERROR_MESSAGE,
  'string.base': ERROR_MESSAGE,
});

module.exports = { checkLogin };