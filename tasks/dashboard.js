const configs               = require('../gulpconfigs.js');
const gulp                  = require('gulp');
const path                  = require('path');
const fs                    = require('fs');
const _                     = require('underscore-node');
const gulpLoadPlugins       = require('gulp-load-plugins');
const Vinyl                 = require('vinyl');
const prettyBytes           = require('pretty-bytes');
const comapareSize          = require('../reports/remoteAssetsReport.json');

const $ = gulpLoadPlugins({
    rename: {
        'gulp-scss-lint': 'scsslint'
    }
});

// store reports here
let scssReport, sizeReport, jsReport, tdReport;

// get files for todo reporter
let watchTodoPath = [];
configs.todowatch.forEach(function (v) {
    watchTodoPath.push(path.join(__dirname, '..', v));
});

// get files for todo reporter
let watchFilesizePath = [];
configs.alfred.filesize.forEach(function (v) {
    watchFilesizePath.push(path.join(__dirname, '..', v));
});
let fsValues = [];
let fsTempValue = {};
let index = 0;
let compareValue;

// variables used in scss reporter
let scssIssues = [];
let scssTempIssue = {};
let scssTempInfo = [];

let jsIssues = [];
let jsTempIssue = {};
let jsTempInfo = [];

const compileLurch = {
    getJsReport: function() {
        let jsonPath = '';
        return gulp.src(configs.paths.dev.js + '**/*.js')
            .pipe($.eslint({
                configFile: configs.paths.dev.js + '.eslintrc'
            }))
            .pipe($.eslint.result(result => {
                jsTempIssue.path = result.filePath.substring(result.filePath.indexOf('js') + 2);
                result.messages.forEach(issue => {
                    jsTempInfo.push({
                        ruleId: issue.ruleId,
                        line: issue.line,
                        column: issue.column,
                        severity: issue.severity,
                        reason: issue.message
                    })
                })
                jsTempIssue.info = jsTempInfo;
                jsIssues.push(jsTempIssue);
                jsTempInfo = [];
                jsTempIssue = {};
            }))
            .on('end', () => {
                jsReport = '';
                jsReport = jsIssues;
            });
    },
    getTodoReport: function () {
        // TODO: get full path, not just the file name in 'getTodoReport()'
        return gulp.src(watchTodoPath)
            .pipe($.todo())
            .pipe($.todo.reporter('json', {fileName: 'todo.json'}))
            .pipe(gulp.dest('./reports/'))
            .on('end', () => {
                tdReport = _.groupBy(JSON.parse(fs.readFileSync(path.join(__dirname, '../reports', 'todo.json'))), function(t){return t.kind})
            });
    },
    getFilesizeReport: function() {

        return gulp.src(watchFilesizePath)
            .pipe($.each(function(content, file, cb) {
                fsTempValue.path = file.relative;
                fsTempValue.uglySize = file.stat.size;
                fsTempValue.prettySize = prettyBytes(file.stat.size);
                compareValue = (file.stat.size * 100 / comapareSize[index].uglySize - 100).toFixed(3);
                if (compareValue > 0) { compareValue = '+' + compareValue; }
                fsTempValue.compare = compareValue;
                fsValues.push(fsTempValue);
                fsTempValue = {};
                index += 1;
                cb();
                // console.log('compareValue', compareValue);
            }))
            .on('end', () => {
                sizeReport = '';
                sizeReport = fsValues;
            });
    },
    saveAssetsSize: function() {
        return gulp.src(watchFilesizePath)
            .pipe($.each(function(content, file, cb) {
                fsTempValue.path = file.relative;
                fsTempValue.uglySize = file.stat.size;
                fsTempValue.prettySize = prettyBytes(file.stat.size);
                fsValues.push(fsTempValue);
                fsTempValue = {};
                cb();
            }))
            .on('end', () => {
                fs.writeFileSync('reports/remoteAssetsReport.json', JSON.stringify(fsValues));
            });
    },
    getScssReport: function() {
        return gulp.src(configs.paths.dev.scss)
            .pipe($.scsslint({
                // 'reporterOutput': '../reports/scssReport.json',
                customReport: function scssCustomReporter(file) {
                    if (!file.scsslint.success) {
                        file.scsslint.issues.forEach(function(issue) {
                            scssTempInfo.push({
                                line: issue.line,
                                column: issue.column,
                                length: issue.length,
                                severity: issue.severity,
                                reason: issue.reason,
                                linter: issue.linter
                            });
                        })
                        let currentFile = file.history.toString().substring(file.history.toString().indexOf('scss') + 4);
                        scssTempIssue.path = currentFile;
                        scssTempIssue.info = scssTempInfo;
                        scssIssues.push(scssTempIssue);
                    }
                    scssTempIssue = {};
                    scssTempInfo = [];
                }
            })).on('end', () => {
                scssReport = '';
                scssReport = scssIssues;
            });
    },
    compileDashboard: function() {
        return gulp.src(configs.paths.dev.base + 'dashboard.{html,njk}')
            .pipe($.data(() => ({scssReport: scssReport})))
            .pipe($.data(() => ({sizeReport: sizeReport})))
            .pipe($.data(() => ({jsReport: jsReport})))
            .pipe($.data(() => ({todoReport: tdReport})))
            .pipe($.nunjucks.compile())
            .pipe(gulp.dest(configs.paths.dest.base))
            .on('end', function(){
                scssIssues = [];
                jsIssues = [];
            })
    }
}

module.exports = compileLurch;
