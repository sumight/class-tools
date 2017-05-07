// TODO 添加css 兼容预处理

var gulp = require('gulp');
var less = require('gulp-less')
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css')
var rename = require('gulp-rename')

gulp.task('default', function() {
  gulp.src('src/index.less')
    .pipe(rename('utils.min.css'))
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(cleancss({}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));

  gulp.src('src/index.less')
    .pipe(rename('utils.css'))
    .pipe(less())
    .pipe(gulp.dest('dist'));
});