const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8081,
    open: true,
    index: 'index.html',
    overlay: true,
    allowedHosts: [
      '.xiaohongshu.com',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      { test: /\.txt$/, use: 'raw-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),

    },
    extensions: ['.js', '*'],
  },
  devtool: 'eval-source-map',
  performance: {
    hints: 'warning',
  },
};
