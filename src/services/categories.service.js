const { Category } = require('../models');

const setCategories = async (category) => {
  const { dataValues } = await Category.create(category);
  return { type: null, message: dataValues };
};

module.exports = { setCategories };
