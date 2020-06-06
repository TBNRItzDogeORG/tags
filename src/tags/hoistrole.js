module.exports = {
	aliases: [`hoist`],
	name: 'hoistrole',
	run: ctx => {
		return ctx.member.roles.hoist.name;
	}
};
