const { User } = require('../models');
const { validateLogin } = require('./validations/login.validation');
const { createToken } = require('../auth/secret');

const login = async (fields) => {
  const error = validateLogin(fields);
  if (error.type) return error;
  
  const result = await User.findOne({ where: fields });

  if (!result) return { type: 400, message: 'Invalid fields' };

  return { type: null, message: createToken(result) };
};

module.exports = {
  login,
};