const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const postController = require('../controllers/post.controller');

const postRoute = express.Router();

postRoute.post('/', validateToken, postController.setPost);

module.exports = { postRoute };
