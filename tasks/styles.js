const configs               = require('../gulpconfigs.js');
const chalk                 = require('chalk');
const gulp                  = require('gulp');
const gulpLoadPlugins       = require('gulp-load-plugins');

const $ = gulpLoadPlugins({
    rename: {
        'gulp-scss-lint': 'scsslint'
    }
});

function scssCustomReporter(file) {
    let cleanPath = file.path.substring(file.path.indexOf(configs.paths.dev.base.substring(configs.paths.dev.base.indexOf('./') + 1)) + 1)
    let issueLength = file.scsslint.issues.length;
    console.logissueLength
    if (!file.scsslint.success) {
        // console.log(chalk.bold( '\n- ' + issueLength + ' issues found in: ' + cleanPath + '\n'));
        // file.scsslint.issues.forEach(function(issue, index)  {
        //     if ( issue.severity == 'error') {
        //         console.log(chalk.red('    🔴   ' + issue.reason + ' at line: ' + issue.line + ', col: ' + issue.column));
        //         (index == issueLength - 1) ? console.log(' ') : ''
        //     } else if ( issue.severity == 'warning' ) {
        //         console.log(chalk.yellow('    🔶   ' + issue.reason + ' at line: ' + issue.line + ', col: ' + issue.column));
        //         (index == issueLength - 1) ? console.log(' ') : ''
        //     }
        // })
        console.log('file.scsslint.issues', file.scsslint.issues);
    }
};

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
            .pipe(gulp.dest(configs.paths.dest.styles))
    },
    beautifyScss: function () {
        return gulp.src(configs.paths.dev.scss, {base: './'})
        .pipe($.csscomb())
        .pipe(gulp.dest('./'))
    }
}

module.exports = compileStyles;
