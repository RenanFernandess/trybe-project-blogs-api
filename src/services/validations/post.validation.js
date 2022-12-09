const { checkPost } = require('./shema');

const validatePost = (fields) => {
  const { error = { details: [{}] } } = checkPost.validate(fields);
  const { details: [{ message }] } = error;
  if (message) return { type: 400, message };
  return { type: null, message: '' };
};

module.exports = { validatePost };