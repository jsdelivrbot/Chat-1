const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
    })
    
    /*
    , new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        output: {
          comments: false,
          beautify: false,
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
      }
    })
    */
  ]  
}

/* webpack --env.NODE_ENV=Second --watch (--progress) */
