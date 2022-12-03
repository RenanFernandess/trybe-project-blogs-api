const express = require('express');
const userController = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post('/', userController.register);

module.exports = { userRoute };
