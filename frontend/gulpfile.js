/**
 * Created by Tomasz Gabrysiak on 2016-03-12.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('./app/')
    .pipe(webserver({
      host: 'localhost',
      port: '8000',
      livereload: true,
      directoryListing: false
    }));
});

gulp.task('default', ['webserver']);
