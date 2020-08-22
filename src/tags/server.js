// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: ['servername'],
	name: 'server',
	run: ctx => (ctx.guild ? ctx.guild.name : 'No server passed to context.')
};
