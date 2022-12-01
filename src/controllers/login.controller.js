const loginService = require('../services/login.service');

const login = async ({ body }, res) => {
  const { type, message } = await loginService.login(body);
  if (type) return res.status(type).json({ message });

  return res.status(200).json({ token: message });
};

module.exports = {
  login,
};
