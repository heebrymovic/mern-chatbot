const OpenAI = require('openai');

exports.openAi = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
});
