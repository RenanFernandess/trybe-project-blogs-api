const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const postController = require('../controllers/post.controller');

const postRoute = express.Router();

postRoute.post('/', validateToken, postController.setPost);

postRoute.get('/', validateToken, postController.getAllPost);

postRoute.get('/:id', validateToken, postController.findPostById);

module.exports = { postRoute };
