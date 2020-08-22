// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: ['usermention', 'mention'],
	name: 'user',
	run: ctx => (ctx.user ? ctx.user.toString() : 'No user passed to context.')
};
