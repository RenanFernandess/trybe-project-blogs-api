require('dotenv/config');

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const createToken = ({ id, email }) => jwt.sign({ data: { userId: id, email } }, secret, jwtConfig);

module.exports = { createToken };
