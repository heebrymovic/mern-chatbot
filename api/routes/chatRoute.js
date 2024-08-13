const express = require('express');

const ChatRouter = express.Router();

const { newMessage } = require('../controllers/chatController');

ChatRouter.post('/newmessage', newMessage);

module.exports = ChatRouter;
