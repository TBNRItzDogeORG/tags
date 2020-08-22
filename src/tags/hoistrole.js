// Copyright (c) Soumil07, BSD-3 Licenses
module.exports = {
	aliases: [`hoist`],
	name: 'hoistrole',
	run: ctx => {
		return ctx.member.roles.hoist.name;
	}
};
