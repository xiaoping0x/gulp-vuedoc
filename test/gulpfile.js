var gulp = require('gulp');
var doc = require('..');

gulp.task('doc', function () {
  return gulp.src(['./fixtures/**/*.vue', './fixtures/**/*.js'])
  	.pipe(doc('md', {
  		extension: ['js', 'vue']
  	}, {
  		defaultGlobals: false
  	}))
    .pipe(gulp.dest('apidocs'));
});