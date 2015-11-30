var webpack = require('webpack')
var defaults = require('./webpack.defaults')

var definePlugin = new webpack.DefinePlugin({
  __DEV__: process.env.NODE_ENV !== 'production,
});

var prodConfig = {
  plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.DefinePlugin({
       process.env: {
         NODE_ENV: process.env.NODE_ENV
       },
       __DEV__: process.env.NODE_ENV !== 'production'
     }),
     new webpack.optimize.UglifyJsPlugin({
       compressor: {
         warnings: false
       }
     })
   ]
}

module.exports = Object.assign({}, defaults, prodConfig)
