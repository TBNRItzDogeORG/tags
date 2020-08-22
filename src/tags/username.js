// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	name: 'username',
	run: ctx => (ctx.user ? ctx.user.username : 'No user passed to context.')
};
