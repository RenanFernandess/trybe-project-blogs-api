const Joi = require('joi');

const ERROR_MESSAGE = 'Some required fields are missing';

const checkLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
}).required().messages({
  'any.required': ERROR_MESSAGE,
  'string.empty': ERROR_MESSAGE,
  'string.email': ERROR_MESSAGE,
  'string.base': ERROR_MESSAGE,
});

const checkUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).required().messages({
  'any.required': ERROR_MESSAGE,
  'string.empty': ERROR_MESSAGE,
  'string.base': ERROR_MESSAGE,
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '{#label} must be a valid email',
});

module.exports = {
  checkLogin,
  checkUser,
};
