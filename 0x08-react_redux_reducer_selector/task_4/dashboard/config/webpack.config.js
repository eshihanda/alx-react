const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // Disable during development
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
};
