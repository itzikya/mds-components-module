const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.js'],
	// Add any Storybook addons you want here: https://storybook.js.org/addons/
	addons: [],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.sass$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		config.resolve.extensions.push('.js', '.jsx');

		return config;
	},
};
