const { checkUser } = require('./shema');

const validateUser = (fields) => {
  const { error = { details: [{}] } } = checkUser.validate(fields);
  const { details: [{ message }] } = error;
  if (message) return { type: 400, message };
  return { type: null, message: '' };
};

module.exports = { validateUser };
