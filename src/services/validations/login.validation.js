const { checkLogin } = require('./shema');

const validateLogin = (fields) => {
  const { error: [{ message }] } = checkLogin.validate(fields);
  if (message) return { type: 400, message };
  return { type: null, message: '' };
};

module.exports = { validateLogin };