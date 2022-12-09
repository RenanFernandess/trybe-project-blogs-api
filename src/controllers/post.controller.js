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

module.exports = { setPost };
