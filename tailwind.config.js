module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				table: '0.15fr minmax(0, 1fr)',
				rows: 'minmax(0, 1fr)',
			},
		},
	},
	plugins: [],
};
