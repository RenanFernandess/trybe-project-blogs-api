const postService = require('../services/post.service');

const setPost = async (req, res) => {
  const {
    user: { id: userId },
    body: { title, content, categoryIds },
  } = req;
  const { type, message } = await postService.setPost({
    userId,
    title,
    content,
    categoryIds,
  });
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const getAllPost = async (_req, res) => {
  const { type, message } = await postService.getAllPost();
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const findPostById = async ({ params: { id } }, res) => {
  const { type, message } = await postService.findPostById(id);
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const updatePost = async (req, res) => {
  const { body: { title, content }, user: { id: userId }, params: { id } } = req;
  const { type, message } = await postService.updatePost({ title, content, userId, id });
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const { user: { id: userId }, params: { id } } = req;
  const { type, message } = await postService.deletePost({ userId, id });
  if (type) return res.status(type).json({ message });
  return res.status(204).json({});
};

module.exports = {
  setPost,
  getAllPost,
  findPostById,
  updatePost,
  deletePost,
};
