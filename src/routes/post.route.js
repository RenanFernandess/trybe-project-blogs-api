const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const postController = require('../controllers/post.controller');

const postRoute = express.Router();

postRoute.post('/', validateToken, postController.setPost);

postRoute.get('/', validateToken, postController.getAllPost);

postRoute.get('/search', validateToken, postController.findPostByQuery);

postRoute.get('/:id', validateToken, postController.findPostById);

postRoute.put('/:id', validateToken, postController.updatePost);

postRoute.delete('/:id', validateToken, postController.deletePost);

module.exports = { postRoute };
