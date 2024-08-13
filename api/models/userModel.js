const Mongoose = require('mongoose');

const Schema = new Mongoose.Schema(
	{
		fullname: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		chats: [
			{
				type: Mongoose.Schema.Types.ObjectId,
				ref: 'chat',
				default: []
			}
		]
	},
	{ timestamps: true }
);

const User = Mongoose.model('user', Schema);

module.exports = User;
