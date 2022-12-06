const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const categoriesController = require('../controllers/categories.controller');

const categoriesRoute = express.Router();

categoriesRoute.post('/', validateToken, categoriesController.setCategories);

categoriesRoute.get('/', validateToken, categoriesController.getCategories);

module.exports = { categoriesRoute };
