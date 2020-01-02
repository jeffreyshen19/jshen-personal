var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var minify = require('gulp-minify');
var webserver = require('gulp-webserver');
var projects = require('./src/projects.json');

gulp.task('default', ['webserver', 'views', 'sass', 'compress'], function() {
  gulp.watch('src/SCSS/*.scss', ['sass']);
  gulp.watch('src/views/*.pug', ['views']);
  gulp.watch('src/*.js', ['compress']);
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/views/*.pug')
    .pipe(pug({
        data: {
            projects: projects
        }
    }))
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
