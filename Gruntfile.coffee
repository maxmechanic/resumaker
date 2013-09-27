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

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-usemin'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.loadNpmTasks 'grunt-contrib-copy'

  grunt.registerTask 'default', ['handlebars', 'sass']
  grunt.registerTask 'build', ['handlebars', 'sass', 'useminPrepare', 'copy', 'concat', 'uglify', 'usemin']
