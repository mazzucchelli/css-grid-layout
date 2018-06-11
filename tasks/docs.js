const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const $                     = require('gulp-load-plugins')();
const sassdoc               = require('sassdoc');

var compileDocs = {
    generateSassDocs: function() {
        return gulp.src(configs.sassdoc.src)
            .pipe(sassdoc({
                dest: configs.sassdoc.dest
            }))
    },
    generateJsDocs: function() {
        return gulp.src('./node_modules/foundation-sites/js/**/*.js', {read: false})
            .pipe($.jsdoc3());
    }
}

module.exports = compileDocs;
