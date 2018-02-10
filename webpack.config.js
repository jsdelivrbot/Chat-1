var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  const publicPath = '/Dest/' + env.NODE_ENV + '/';
  
  return {
    entry: './App/' + env.NODE_ENV + '/src/index.js',
    
    output: {
      path: path.join(__dirname, publicPath),
      filename: '[name].bundle.js'
    },
    
    module: {
      loaders: [
        {
          test: /\.js|.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
        {
          test: /\.styl$/,
          loader: ['style-loader', 'css-loader', 'stylus-loader']
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader'
        }
      ]
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: 'App/' + env.NODE_ENV + '/pug/index.pug',
        filename: 'index.html'
      })
    ]  
  }
}

/* webpack --env.NODE_ENV=Second --watch (--progress) */
