const Mongoose = require('mongoose');

const Schema = new Mongoose.Schema(
	{
		role: {
			type: String,
			required: true
		},
		content: {
			type: String,
			default: ''
		}
	},
	{ timestamps: true }
);

const Chat = Mongoose.model('chat', Schema);

module.exports = Chat;
