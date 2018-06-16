var gulp = require('gulp');
//var sass = require('gulp-sass');
//var uglifycss = require('gulp-uglifycss'); // to minify files
//var concat = require('gulp-concat');
//var minify = require('gulp-minify'); // minify js
var watch = require('gulp-watch');
var connect = require('gulp-connect');
//var autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('default', ['connect']);