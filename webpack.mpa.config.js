const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;
const webpack = require('webpack');

module.exports = {
	entry: {
		demo: './src/assets/scripts/demo.js',
		// auth: "./src/assets/scripts/auth.js",
		// works: "./src/assets/scripts/works.js",
		// blog: "./src/assets/scripts/blog.js"
	},
	output: {
		// filename: "bundle.js"
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					warnings: false,
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
	devtool: env === 'development' ? '#eval-source-map' : '',

	// plugins: [
	// 	new webpack.ProvidePlugin({
	// 		$: 'jquery',
	// 		jQuery: 'jquery',
	// 		'window.jQuery': "jquery'",
	// 		'window.$': 'jquery',
	// 	}),
	// ]


};
