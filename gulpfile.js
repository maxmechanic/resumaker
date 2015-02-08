var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var bundler = watchify(browserify('./app/js/app.js', watchify.args));
bundler.transform('6to5ify');

gulp.task('js', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
}

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
  return gulp.src('app/sass/main.scss')
    .pipe(sass({includePaths: require('node-neat').includePaths}))
    .pipe(gulp.dest('build/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', function() {
  browserSync({
    open: false,
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch(['*','**/*'], {cwd: 'build'}, reload);
});

gulp.task('watch', function() {
  bundler.on('update', bundle);
  gulp.watch(['app/sass/*.scss', 'app/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['html', 'sass', 'js', 'serve', 'watch']);