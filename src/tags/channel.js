// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	name: 'channel',
	run: ctx => (ctx.channel ? ctx.channel.toString() : 'No channel passed to context.')
};
