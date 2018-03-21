var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer');

gulp.task('sass', function() {
  
  gulp.src('sass/main.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(prefix('last 2 versions'))
      .pipe(gulp.dest('css'))
})

gulp.task('default', function() {
  
  gulp.watch('sass/**/*.scss', ['sass'])
})