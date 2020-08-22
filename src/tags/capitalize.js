// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	aliases: ['titlecase'],
	name: 'capitalize',
	run: ctx => ctx.value.charAt(0).toUpperCase() + ctx.value.slice(1)
};
