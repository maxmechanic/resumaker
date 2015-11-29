var webpack = require('webpack')
var defaults = require('./webpack.defaults')

var prodConfig = {
  plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': process.env.NODE_ENV
       }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compressor: {
         warnings: false
       }
     })
   ]
}

module.exports = Object.assign({}, defaults, prodConfig)
