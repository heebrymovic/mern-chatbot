const { customError } = require('../utils');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
	const accessToken = req.cookies.accessToken;

	if (!accessToken) return customError(res, 401, 'Authentication Failed. You need to log in first');

	try {
		const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);

		if (!decodedToken) return customError(res, 401, 'Authorization Failed. Cannot verify token');

		const validUser = await User.findById(decodedToken._id);

		if (!validUser) return customError(res, 400, 'Invalid User');

		req.userId = validUser._id;

		next();
	} catch (err) {
		customError(res, 500, err.message);
	}
};
