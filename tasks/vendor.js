const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const $                     = require('gulp-load-plugins')();

var vendor = {
    compileVendors: function() {
        return gulp.src(configs.paths.vendors)
            .pipe($.concat('vendor.min.js'))
            .pipe(gulp.dest(configs.paths.dest.scripts))
    }
}

module.exports = vendor;