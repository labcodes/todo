var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractText = require('extract-text-webpack-plugin');
var UgliFyJS = require('uglifyjs-webpack-plugin');


module.exports = {
  entry:  path.join(__dirname, 'assets/src/js/index'),

  output: {
    path: path.join(__dirname, 'assets/dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'assets/dist')], {
      watch: true,
    }),
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new ExtractText({
      filename: '[name]-[hash].css'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

}
