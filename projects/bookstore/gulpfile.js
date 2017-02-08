
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver');


gulp.task('sass', function() {

	return gulp.src('sass/style.scss')
		.pipe(sass({errLogToConsole: true}))
		.pipe(prefixer())
		.pipe(gulp.dest('css'))
});   


gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
});