const webpack = require('webpack');

const hwp = require('html-webpack-plugin');
const hwp_config = new hwp({
  template:  __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "./assets/styles/css/app.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    './app/js/index.js',
     './app/scss/app.scss'
  ],
  output:{
    filename:"bundle.js",
    path: __dirname + '/build/',
    publicPath: '/build'
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: __dirname,
    stats: {
      colors: true,
      chunks: false
    }
  },
  devtool: "source-map",
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
        exclude: /node_modules/,
        options: {
          limit: 8192,
          name:"/assets/imgs/[name].[ext]"
        }
      },
      {
          test: /\.(woff2?|ttf|otf|eot|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
              name: '/assets/fonts/[name].[ext]'
          }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options:{sourceMap:true}
                }, {
                    loader: "sass-loader",
                    options:{sourceMap:true}
                }],
                fallback: "style-loader"
            })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    hwp_config,
    extractSass
 ]
}
