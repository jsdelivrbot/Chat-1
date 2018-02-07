const path = require('path')

module.exports = {
  entry: './App/index.js',
  
  output: {
    path: path.resolve(__dirname, 'Dest'),
    filename: 'bundle.js'
  },
  
  module: {
       loaders: [
           { test:  /\.js$/,
             loader: 'babel' }
       ]
   }
}
