const configs               = require('../gulpconfigs.js');
const buffer                = require('vinyl-buffer');
const gulp                  = require('gulp');
const gulpLoadPlugins       = require('gulp-load-plugins');

const $ = gulpLoadPlugins({
    rename: {
      'gulp-svg-sprite': 'svgsprite'
    }
});

const example = (process.env.NODE_ENV !== 'prod') ? true : false;

var compileSprite = {
    compileSvg: function () {
        return gulp.src(configs.paths.dev.svg + '*.svg')
            .pipe(buffer())
            .pipe($.rename(opt => {
                opt.basename = opt.basename.replace(new RegExp('_', 'g'), '-');
                return opt;
            }))
            .pipe($.svgsprite({
                mode: {
                    symbol: {
                        render: {
                            css: false,
                            scss: false
                        },
                        dest: './',
                        prefix: '.svg--%s',
                        sprite: 'sprite.svg',
                        example: example
                    }
                }
            }))
            .pipe(gulp.dest(configs.paths.dest.media));
    },
    minifySvg: function () {
        return gulp.src(configs.paths.dev.svg + '*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(gulp.dest(configs.paths.dev.svg));
    }
}

module.exports = compileSprite;