// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: ['membercount'],
	name: 'servercount',
	run: ctx => (ctx.guild ? ctx.guild.memberCount : 'No server passed to context.')
};
