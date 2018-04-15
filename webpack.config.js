var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './App/src/index.js',
  
  output: {
    path: path.join(__dirname, '/Dest/'),
    filename: '[name].bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: 'App/pug/index.pug',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]  
}

/* webpack --env.NODE_ENV=Second --watch (--progress) */
