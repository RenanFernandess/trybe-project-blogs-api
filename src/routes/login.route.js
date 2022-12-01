const express = require('express');
const loginController = require('../controllers/login.controller');

const loginRoute = express.Router();

loginRoute.post('/', loginController.login);

module.exports = { loginRoute };