const userService = require('../services/user.service');

const register = async (req, res) => {
  const { type, message } = await userService.register(req.body);

  if (type) return res.status(type).json({ message });

  return res.status(201).json({ token: message });
};

const getAllUsers = async (_req, res) => {
  const { message } = await userService.getAllUsers();
  return res.status(200).json(message);
};

const getUserById = async ({ params: { id } }, res) => {
  const { type, message } = await userService.findByUserData({ id });
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  register,
  getAllUsers,
  getUserById,
};
