var hwp = require('html-webpack-plugin');
var webpack = require('webpack');
// var PROD = JSON.parse(process.env.PROD || '0');
var hwp_config = new hwp({
  template:  __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output:{
    filename:"index_bundle.js",
    path: __dirname + '/docs'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    hwp_config
 ]
}