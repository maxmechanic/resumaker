var defaults = require('./webpack.defaults')
var devConfig = {
  devtool: 'source-map'
}

module.exports = Object.assign({}, defaults, devConfig)