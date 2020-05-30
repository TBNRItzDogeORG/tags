module.exports = {
	aliases: ['allargs'],
	name: 'args',
	run: ctx => {
		if (!ctx.args || !ctx.args.length) throw 'no arguments provided.';
		return typeof ctx.value === 'number' ? ctx.args[ctx.value] : ctx.args.join(', ');
	}
};
