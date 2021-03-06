const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglifyjs');
const rename = require('gulp-rename');

gulp.task('default', () => {
	return gulp.src('src/index.js')
    .pipe(babel({
    	presets: ['es2015']
    }))
    .pipe(rename('vue-medusa.es5.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('vue-medusa.min.js'))
    .pipe(gulp.dest('dist'));
});
