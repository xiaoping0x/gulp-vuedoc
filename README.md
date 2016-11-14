# gulp-vuedoc

Generate jsdoc for [vuejs](http://vuejs.org) component using documentation.js.

**Notice: need modified [documentation.js](https://github.com/xiaoping0x/documentation)**

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

## Credits

* [documentation.js](https://github.com/documentationjs/documentation)
* [gulp-documentation](https://github.com/documentationjs/gulp-documentation)
* [vue-template-compiler](https://github.com/vuejs/vue)

## License

MIT

