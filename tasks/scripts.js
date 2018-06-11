const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const path                  = require('path');
const UglifyJSPlugin        = require('uglifyjs-webpack-plugin');
const $                     = require('gulp-load-plugins')();

let entries = {};
let filesArray = [];

if (typeof configs.webpack.entries === 'string') {
    entries[ path.basename(configs.webpack.entries).slice(0, -path.extname(configs.webpack.entries).length) ] = path.resolve(configs.webpack.entries);
} else {
    configs.webpack.entries.forEach(scr => {
        entries[ path.basename(scr).slice(0, -path.extname(scr).length) ] = path.resolve(scr);
    });
}

var compileScripts = {
    compileJs: function () {
        const toSourceMaps = process.env.NODE_ENV !== 'prod';
        const devtool = (toSourceMaps) ? 'source-map' : '';
        return gulp.src(configs.webpack.entries)
            .pipe($.webpack({
                entry: entries,
                output: {
                    filename: '[name].min.js'
                },
                devtool: 'source-map',
                module: {
                    loaders: [{
                        test: /\.js$/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015', 'stage-2']
                        }
                    }]
                },
                plugins: [
                    // new wp.ProvidePlugin({
                    //     $: 'jquery',
                    //     jQuery: 'jquery'
                    // }),
                    // new wp.optimize.DedupePlugin(),
                    // new CompressionPlugin(),
                    new UglifyJSPlugin({
                        sourceMap: true
                    })
                ],
                target: 'web'
            }))
            .pipe(gulp.dest(configs.paths.dest.scripts))
            .on('finish', () => {
                // console.log();
            });
    },
    lintJs: function() {
        return gulp.src(configs.paths.dev.js + '**/*.js')
            .pipe($.eslint({
                // TODO: Explore autofix function with 'fix: true' prop or use gulp-fixmyjs
                // fix: true,
                // TODO: Explore eslint configuration
                configFile: configs.paths.dev.js + '.eslintrc'
            }))
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe($.eslint.format())
    }
}

module.exports = compileScripts;
