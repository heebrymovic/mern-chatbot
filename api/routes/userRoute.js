const express = require('express');

const UserRouter = express.Router();

const { login, register, logout } = require('../controllers/authController');

UserRouter.post('/login', login);

UserRouter.post('/register', register);

UserRouter.get('/logout', logout);

module.exports = UserRouter;
