const { checkLogin } = require('./shema');

const validateLogin = (fields) => {
  const { error = { details: [{}] } } = checkLogin.validate(fields);
  const { details: [{ message }] } = error;
  if (message) return { type: 400, message };
  return { type: null, message: '' };
};

module.exports = { validateLogin };