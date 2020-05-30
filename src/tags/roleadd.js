const { regex } = require('../util/utils.js');

module.exports = {
	aliases: ['addrole'],
	name: 'roleadd',
	run: ctx => {
		const rolename = ctx.value;
		if (!rolename) throw 'You need to provide a role ID to add separated by a colon. Example: {roleadd:1111111111}';
		const role = regex.role.test(rolename)
			? ctx.guild.roles.get(rolename)
			: ctx.guild.roles.find(rol => rol.name.toLowerCase() === rolename.toLowerCase());
		if (!role) throw 'Invalid role. Please provide a valid role name or ID.';
		ctx.member.roles.add(role);
		return '';
	}
};
