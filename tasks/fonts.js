const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const $                     = require('gulp-load-plugins')();
const del                   = require("del");

var fontsTask = {
    generateFonts: function() {
        return gulp.src(configs.paths.dev.fonts.filesource + '**/*.{ttf,otf}')
            .pipe($.fontgen({
                dest: configs.paths.dev.fonts.tempdest
            }));
    },
    fixFontsPath: function() {
        return gulp.src(configs.paths.dev.fonts.tempdest + '*.css')
            .pipe($.replace(
                configs.paths.dev.fonts.urlReplace.from, 
                configs.paths.dev.fonts.urlReplace.to
            ))
            .pipe(gulp.dest(configs.paths.dev.fonts.tempdest))
    },
    generateFontsScss: function() {
        return gulp.src(configs.paths.dev.fonts.tempdest + '*.css')
            .pipe($.concat('all.css'))
            .pipe($.rename(configs.paths.dev.fonts.scssname))
            .pipe(gulp.dest(configs.paths.dev.fonts.scssdest))
    },
    moveFontFiles: function() {
        return gulp.src(configs.paths.dev.fonts.tempdest + '*.{eot,svg,ttf,woff,woff2}')
            .pipe(gulp.dest(configs.paths.dest.fonts))
            .on('finish', () => {
                del(configs.paths.dev.fonts.tempdest + '**');
            });
    }
}

module.exports = fontsTask;