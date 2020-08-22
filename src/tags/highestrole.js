// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: [],
	name: 'highestrole',
	run: ctx => {
		return ctx.member.roles.highest.name;
	}
};
