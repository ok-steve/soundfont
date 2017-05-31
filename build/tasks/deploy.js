var gulp = require('gulp');
var paths = require('../paths');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['export'], function() {
  return gulp.src(paths.exportSrv + '/**/*')
    .pipe(ghPages({
      force: true
    }));
});
