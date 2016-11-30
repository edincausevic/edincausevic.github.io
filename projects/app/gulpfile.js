
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


// SASS
gulp.task('sass', function(){
	gulp.src('sass/style.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
});	

// JS
gulp.task('script', function(){
    gulp.src('scripts/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('scripts/*.js', ['script']);
});