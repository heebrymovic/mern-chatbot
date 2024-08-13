const { openAi } = require('../utils');
const User = require('../models/userModel');
const Chat = require('../models/chatModel');
const { customError, customMessage } = require('../utils');

const createChat = async (message, userId) => {
	const newChat = await new Chat(message);

	await newChat.save();

	const user = await User.findByIdAndUpdate(
		userId,
		{ $push: { chats: newChat._id } },
		{
			new: true
		}
	).populate('chats');

	return user;
};

exports.newMessage = async (req, res) => {
	const { message } = req.body;

	const userId = req.userId;

	if (!message) return customError(res, 400, 'Invalid or Incomplete Request Body Data');

	try {
		const validUser = await User.findById(userId);

		const newUserChats = await createChat({ role: 'user', content: message }, userId);

		const chats = newUserChats.chats.map(({ role, content }) => ({ role, content }));

		const chatResponse = await openAi.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: chats
		});

		const botMessage = chatResponse.choices[0].message;

		const newBotChats = await createChat(botMessage, userId);

		customMessage(res, 'message successfully sent', { chats: newBotChats.chats });
	} catch (err) {
		customError(res, 500, err.message);
	}
};
