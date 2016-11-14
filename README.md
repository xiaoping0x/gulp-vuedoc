# gulp-vuedoc

Generate jsdoc for [vuejs](http://vuejs.org) component using documentation.js.

## Usage

    npm i -D gulp-vuedoc

## Example

```js
var gulp = require('gulp');
var doc = require('gulp-vuedoc');

gulp.task('doc', function () {
  return gulp.src(['./src/**/*.vue', './src/**/*.js'])
    .pipe(doc('md', {
        extension: ['js', 'vue']
    }))
    .pipe(gulp.dest('apidocs'));
});
```
