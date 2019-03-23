var
gulp         = require('gulp'),
less         = require('gulp-less'),
autoprefixer = require('gulp-autoprefixer'),
minifycss    = require('gulp-minify-css'),
uglify       = require('gulp-uglify'),
rename       = require('gulp-rename'),
concat       = require('gulp-concat'),
notify       = require('gulp-notify'),
watch        = require('gulp-watch'),
path         = require('path');

var paths = {
    resource: {
        stylesheet: './assets/less/app.less'
    },
    build: {
        stylesheet: './public/css/'
    }
}


// Styles
gulp.task('styles', function() {
  return gulp.src(paths.resource.stylesheet)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(paths.build.stylesheet))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.build.stylesheet))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', function() {
    gulp.watch(paths.resource.stylesheet, ['styles']);
});