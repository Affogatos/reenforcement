const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Affogato',
      template: path.join(__dirname, 'assets', 'template.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public', 'dist'),
    historyApiFallback: true,
  },
};
