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
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
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
