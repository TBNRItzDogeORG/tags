module.exports = {
	aliases: ['servername'],
	name: 'server',
	run: ctx => (ctx.guild ? ctx.guild.name : 'No server passed to context.')
};
