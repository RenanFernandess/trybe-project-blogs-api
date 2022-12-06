const { Category } = require('../models');

const setCategories = async (category) => {
  const { dataValues } = await Category.create(category);
  return { type: null, message: dataValues };
};

const getCategories = async () => {
  const result = await Category.findAll();
  return { type: null, message: result };
};

module.exports = {
  setCategories,
  getCategories,
};
