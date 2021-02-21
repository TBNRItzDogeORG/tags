// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: ['allargs'],
	name: 'args',
	run: ctx => {
		if (!ctx.args || !ctx.args.length) throw 'no arguments provided.';
		return !isNaN(ctx.value)  ? ctx.args[ctx.value] : ctx.args.join(' ');
	}
};
