module.exports = {
	aliases: [],
	name: 'highestrole',
	run: ctx => {
		return ctx.member.roles.highest.name;
	}
};
