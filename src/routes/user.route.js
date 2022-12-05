const express = require('express');
const userController = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/validateToken');

const userRoute = express.Router();

userRoute.post('/', userController.register);

userRoute.get('/', validateToken, userController.getAllUsers);

module.exports = { userRoute };
