var webpack = require('webpack')
var defaults = require('./webpack.defaults')

var definePlugin = new webpack.DefinePlugin({
  __DEV__: process.env.NODE_ENV !== 'production',
});

var devConfig = {
  devtool: 'source-map',
  plugins: [definePlugin]
}

module.exports = Object.assign({}, defaults, devConfig)