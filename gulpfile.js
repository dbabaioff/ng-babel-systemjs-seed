var gulp   = require('gulp');
var del    = require('del');
var concat = require('gulp-concat');

var PATHS = {
    src: {
      js: 'src/**/*.js',
      html: 'src/**/*.html'
    },
    lib: [
      'node_modules/angular/angular.js',
      'node_modules/systemjs/dist/system-csp-production.src.js'
    ]
};

gulp.task('clean', function(done) {
  del(['dist'], done);
});

gulp.task('js', function () {
    var babel = require('gulp-babel');

    return gulp.src(PATHS.src.js)
        .pipe(babel({
            modules: 'system',
            moduleIds: true
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
    var size = require('gulp-size');
    return gulp.src(PATHS.lib)
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('play', ['default'], function () {
    var http        = require('http');
    var connect     = require('connect');
    var serveStatic = require('serve-static');
    var open        = require('open');

    var port = 9100, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['js', 'html', 'libs']);
