var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var pug = require('gulp-pug');
var minify = require('gulp-minify');
var webserver = require('gulp-webserver');

gulp.task('views', function buildHTML() {
  return gulp.src('src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
  return gulp.src('src/SCSS/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/CSS'));
});

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(minify({}))
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function () {
  gulp.watch('src/SCSS/*.scss', gulp.series('sass'));
  gulp.watch('src/views/*.pug', gulp.series('views'));
  // gulp.watch('src/*.js', gulp.series('compress'));
});

gulp.task('default', gulp.series('views', 'sass', gulp.parallel('watch', 'webserver')));
