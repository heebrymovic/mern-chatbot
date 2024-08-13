const express = require('express');

const { app, connectDB } = require('./connectDB');

const { userRoutes, chatRoutes } = require('./routes');
const { verifyToken } = require('./middleware/verifyToken');

const morgan = require('morgan');

const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());

app.use(morgan('dev'));

app.use(cookieParser());

app.use('/api/auth', userRoutes);

app.use('/api/chats', verifyToken, chatRoutes);
