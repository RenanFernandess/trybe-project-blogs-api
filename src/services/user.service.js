const { User } = require('../models');
const { createToken } = require('../auth/secret');
const { validateUser } = require('./validations/user.validation');

const register = async ({ displayName, email, password, image }) => {
  const error = validateUser({ displayName, email, password, image });
  if (error.type) return error;
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password, image },
  });
  if (!created) return { type: 409, message: 'User already registered' };
  return { type: null, message: createToken(user) };
};

module.exports = { register };
