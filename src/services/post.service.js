const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');
const { validatePost } = require('./validations/post.validation');

const INTERNAL_ERROR = { type: 500, message: 'Internal server error' };

const setPostAndCategory = async ({ categoryIds, ...post }) => {
  const result = await sequelize.transaction(async (t) => {
    const date = new Date();
    const { dataValues, dataValues: { id: postId } } = await BlogPost.create({
      ...post, published: date, updated: date,
    }, { transaction: t });
    const postCategories = categoryIds.map((categoryId) => ({ categoryId, postId }));
    await PostCategory.bulkCreate(postCategories, { transaction: t });
    return dataValues;
  });
  return result;
};

const setPost = async (fields) => {
  const { categoryIds } = fields;
  const fieldError = validatePost(fields);
  if (fieldError.type) return fieldError;
  try {
    const checkCategories = (await Promise.all(categoryIds.map((id) => Category.findByPk(id))))
    .every((item) => item);
    if (!checkCategories) return { type: 400, message: 'one or more "categoryIds" not found' };
    return { type: null, message: await setPostAndCategory(fields) };
  } catch (error) { return INTERNAL_ERROR; }
};

const getAllPost = async () => {
  try {
    const result = await BlogPost.findAll({
      include: [
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
      ],
    });
    return { type: null, message: result };
  } catch (_e) { return INTERNAL_ERROR; }
};

module.exports = {
  setPost,
  getAllPost,
};