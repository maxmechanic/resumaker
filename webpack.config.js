module.exports = {
  context: __dirname + "/app",
  resolve: {
    alias: {
      deps: __dirname + '/bower_components',
      jquery: 'deps/jquery/dist/jquery',
      underscore: 'deps/underscore/underscore',
      backbone: 'deps/backbone/backbone'
    }
  },
  entry: {
    app: './js/app'
  },
  output: {
    path: "bundles/",
    filename: "app.js",
  }
};