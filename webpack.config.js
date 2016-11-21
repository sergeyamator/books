const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './source/main.js',
  output: {
    path: './',
    filename: 'build/bundle.min.js'
  },

  devServer: {
    inline: true,
    port: 9000
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'source/data.json', to: 'build/data.json' }
      ])
  ]
};