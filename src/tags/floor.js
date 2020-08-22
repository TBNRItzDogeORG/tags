// Copyright (c) Soumil07, BSD-3 License
module.exports = {
	name: 'floor',
	run: ctx => (ctx.value.length > 0 ? Math.floor(Number(ctx.value[0])) : 'No number provided.')
};
