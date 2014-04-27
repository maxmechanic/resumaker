module.exports = (grunt) ->
  grunt.initConfig
    sass:
      dev:
        files:
          'app/styles/main.css':'app/sass/main.scss'
    handlebars:
      compile:
        options:
          namespace: 'templates'
          processName: (filepath) ->
            regex = /([^/]*)$/
            filepath.match(regex)[0]
        files:
          'app/js/templates/templates.js': ['app/js/templates/*.hbs']
    copy:
      build:
        files:
          'dist/index.html': 'app/index.html'
    uglify:
      options:
        mangle: false
    useminPrepare:
      options:
        dest: 'dist'
      html: 'app/index.html'
    usemin:
      html: 'dist/index.html'
      css: 'dist/styles/main.css'
    watch:
      hbs:
        files: 'app/js/templates/*.hbs'
        tasks: ['handlebars']
      sass:
        files: 'app/sass/*.scss'
        tasks: ['sass']
    "webpack-dev-server":
      options: 
        webpack: require './webpack.config'
        contentBase: './app'
      start:
        keepAlive: yes
        webpack:
          devtool: 'eval'
          debug: yes

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'pack', ['webpack-dev-server']

  grunt.registerTask 'default', ['handlebars', 'sass']
  grunt.registerTask 'build', ['handlebars', 'sass', 'useminPrepare', 'copy', 'concat', 'uglify', 'usemin']
