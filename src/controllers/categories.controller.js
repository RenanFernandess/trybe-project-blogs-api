const categoriesService = require('../services/categories.service');

const setCategories = async ({ body: { name } }, res) => {
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { type, message } = await categoriesService.setCategories({ name });
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

const getCategories = async (_req, res) => {
  const { message } = await categoriesService.getCategories();
  return res.status(200).json(message);
};

module.exports = {
  setCategories,
  getCategories,
};
