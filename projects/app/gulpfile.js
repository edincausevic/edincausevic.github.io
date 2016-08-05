
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


// SASS
gulp.task('sass', function(){
	gulp.src('sass/style.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('css/'))
});	

gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
});