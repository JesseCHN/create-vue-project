const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '',
    pathinfo: false,
  },
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
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: 'warning',
  },
});
