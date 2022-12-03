const userService = require('../services/user.service');

const register = async (req, res) => {
  const { type, message } = await userService.register(req.body);

  if (type) return res.status(type).json({ message });

  return res.status(201).json({ token: message });
};

module.exports = { register };
