const { checkToken } = require('../auth/validateJwt');

const validateToken = async (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const { type, message } = await checkToken(authorization);
  if (type) return res.status(type).json({ message });
  return next();
};

module.exports = { validateToken };
