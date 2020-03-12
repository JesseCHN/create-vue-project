const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:16].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '',
  },
  mode: 'production',
  target: 'web',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    alias: {

    },
    extensions: ['*'],
  },
  performance: {
    hints: 'error',
  },
};
