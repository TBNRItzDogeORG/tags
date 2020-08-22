// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	name: 'usertag',
	run: ctx => (ctx.user ? ctx.user.tag : 'No user passed to context.')
};
