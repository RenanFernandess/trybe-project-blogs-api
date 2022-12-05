require('dotenv/config');

const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const checkToken = async (token) => {
  const decoded = jwt.verify(token, secret);
  const { data: { userId, email } } = decoded;
  const { type, message } = await userService.findByUserData({ id: userId, email });
  if (type) return { type, message: 'Expired or invalid token' };
  return { type: null, message };
};

module.exports = { checkToken };
