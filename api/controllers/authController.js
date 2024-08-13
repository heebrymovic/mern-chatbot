const bcrypt = require('bcrypt');

const User = require('../models/userModel');

const { customError, customMessage, hashPassword, generateTokenAndSetCookie } = require('../utils');

exports.register = async (req, res) => {
	const { fullname, email, password } = req.body;

	if (!fullname || !email || !password) return customError(res, 400, 'Invalid or Incomplete Request Body Data');

	try {
		const userExist = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });

		if (userExist) return customError(res, 401, 'Email already exist');

		const hashedPassword = await hashPassword(password.toLowerCase());

		const newUser = await new User({ fullname, email, password: hashedPassword });

		await newUser.save();

		const { password: newPassword, ...user } = newUser._doc;

		customMessage(res, 'User Successfully Registered', { user });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) return customError(res, 400, 'Invalid or Incomplete Request Body Data');

	try {
		const validUser = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });

		if (!validUser) return customError(res, 401, 'Account not found');

		const validPassword = await bcrypt.compare(password.toLowerCase(), validUser.password);

		if (!validPassword) return customError(res, 401, 'Invalid Credentials');

		generateTokenAndSetCookie(res, validUser._id);

		const { password: userPassword, ...user } = validUser._doc;

		customMessage(res, 'User Successfully Login', { user });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.logout = async (req, res) => {
	try {
		res.clearCookie('accessToken').status(200).json({ message: 'Logout Successfull' });
	} catch (err) {
		customError(res, 500, err.message);
	}
};
