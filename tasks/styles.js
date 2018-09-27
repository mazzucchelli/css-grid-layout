const configs = require('../gulpconfigs.js');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

var compileStyles = {
    compileScss: function () {
        const toSourceMaps = process.env.NODE_ENV !== 'prod';
        return gulp.src(configs.paths.dev.scss)
            .pipe($.if(toSourceMaps, $.sourcemaps.init()))
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: [
                    'last 4 versions',
                    'ie >= 9',
                    'Android >= 2.3'
                ],
                flexbox: 'no-2009',
                grid: false
            }))
            // .pipe($.cleancss())
            // TODO: Rename style.css to style.min.css in build scripts
            .pipe($.if(toSourceMaps, $.sourcemaps.write('.')))
            .pipe(gulp.dest(configs.paths.dest.styles));
    }
};

module.exports = compileStyles;
