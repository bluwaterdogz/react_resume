const hwp = require('html-webpack-plugin');
const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD || '0');
const hwp_config = new hwp({
  template:  __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output:{
    filename:"bundle.js",
    path: __dirname + '/build',
    publicPath: PROD ? './react_resume/build'  : "./build"
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
          limit: 8192,
          name:"/assets/required/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    hwp_config
 ]
}
