const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
	header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: '[name].bundle.js',
	clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8564,
    open: true,
	hot: true,
	compress: true,
	historyApiFallback: true,
  },
  module: {
	rules: [
		{
			test: /\.css$/i,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			use: [
				{loader: 'image-webpack-loader'} //["file-loader"]
			]
		}
	]
  },
  optimization: {
	splitChunks: {
	  chunks: 'all',
	},
  },
  devtool: 'inline-source-map',
  plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		template: './index.html',
	}),
],
};
