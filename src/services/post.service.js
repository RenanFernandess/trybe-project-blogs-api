const { BlogPost, PostCategory, sequelize } = require('../models');

const setPost = async ({ categoryIds, ...post }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const { dataValues, dataValues: { id: postId } } = await BlogPost.Create({
        ...post, published: 'NOW()', updated: 'NOW()',
      }, { transaction: t });
      const postCategories = categoryIds.map((categoryId) => ({ categoryId, postId }));
      await PostCategory.bulkCreate(postCategories, { transaction: t });
      return dataValues;
    });
    return { type: null, message: result };
  } catch (error) {
    return { type: 500, message: '' };
  }
};

module.exports = { setPost };