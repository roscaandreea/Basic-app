var gulp =require('gulp');
var jshint = require('gulp-jshint');
var jsFiles =['*.js','src/**/*.js'];

gulp.task('style',function(){
	gulp.src(jsFles)
	    .pipe(jshint())
	    .pipe(jshnt.reporter('jshint-stylish',{
	    	verbose: true
	    }));
});