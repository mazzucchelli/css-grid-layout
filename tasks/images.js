const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const $                     = require('gulp-load-plugins')();

var imagesMin = {
    minifyImg: function() {
        return gulp.src(configs.paths.dev.images + '*')
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]))
            .pipe(gulp.dest(configs.paths.dest.media))
            .on('finish', () => {
                // console.log();
            });
    }
}

module.exports = imagesMin;