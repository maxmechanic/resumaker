module.exports = {
  context: './app/js',
  resolve: {
    alias: {
      deps: __dirname + '/bower_components',
      jquery: 'deps/jquery/jquery',
      underscore: 'deps/underscore/underscore',
      backbone: 'deps/backbone/backbone',
      handlebars: 'deps/handlebars/handlebars',
      filesaver: 'deps/FileSaver/FileSaver',
      models: __dirname + '/app/js/models',
      routers: __dirname + '/app/js/routers',
      collections: __dirname + '/app/js/collections',
      views: __dirname + '/app/js/views'
    }
  },
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: "[id].bundle.js"
  }
};