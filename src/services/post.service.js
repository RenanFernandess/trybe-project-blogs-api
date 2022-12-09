const { BlogPost, PostCategory, sequelize } = require('../models');
const { validatePost } = require('./validations/post.validation');

const setPost = async ({ categoryIds, ...post }) => {
  const fieldError = validatePost({ categoryIds, ...post });
  if (fieldError.type) return fieldError;
  const date = new Date();
  try {
    const result = await sequelize.transaction(async (t) => {
      const { dataValues, dataValues: { id: postId } } = await BlogPost.create({
        ...post, published: date, updated: date,
      }, { transaction: t });
      const postCategories = categoryIds.map((categoryId) => ({ categoryId, postId }));
      await PostCategory.bulkCreate(postCategories, { transaction: t });
      return dataValues;
    });
    return { type: null, message: result };
  } catch (error) { return error; }
};

module.exports = { setPost };