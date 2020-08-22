// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	name: 'channelname',
	run: ctx => (ctx.channel ? ctx.channel.name : 'No channel passed to context.')
};
