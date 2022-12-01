const { User } = require('../models');
const { validateLogin } = require('./validations/login.validation');

const login = async (fields) => {
  const error = validateLogin(fields);
  if (error.type) return error;
  
  const result = await User.findOne({ where: fields });

  console.log(result);
};

module.exports = {
  login,
};