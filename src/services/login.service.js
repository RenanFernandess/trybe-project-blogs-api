const { User } = require('../models');
const { validateLogin } = require('./validations/login.validation');

const login = async (fields) => {
  const error = validateLogin(fields);
  if (error.type) return error;
  
  const result = await User.findOne({ where: fields });

  if (!result) return { type: 400, message: 'Invalid fields' };
  console.log(result);
  return { type: null, message: result };
};

module.exports = {
  login,
};