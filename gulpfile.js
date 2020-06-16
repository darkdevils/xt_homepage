const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style() {
  return gulp
    .src('resources/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('resources/css'));
    /*.pipe(browserSync.stream());*/
}

function watch() {
  /*browserSync.init({
    server: {
      baseDir: "./",
      index: "/index.html"
    }
  });*/
  gulp.watch('resources/scss/*.scss', style);
  // gulp.watch('./page/**/*.html').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;



