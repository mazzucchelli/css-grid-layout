const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const $                     = require('gulp-load-plugins')();

var compileHtml = {
    compileHtml: function() {
        // TODO: Remove dashboard.html from gulp.src
        return gulp.src(configs.paths.dev.base + '*.{html,njk}')
            // .pipe($.data(() => ()))
            .pipe($.nunjucks.compile())
            .pipe(gulp.dest(configs.paths.dest.base))
    }
}

module.exports = compileHtml;
