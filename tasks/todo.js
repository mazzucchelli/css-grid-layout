const configs               = require('../gulpconfigs.js');
const _                     = require('lodash');
const chalk                 = require('chalk');
const gulp                  = require('gulp');
const path                  = require('path');
const $                     = require('gulp-load-plugins')();

let issuesJson; // update todo list here

var watchPath = [];
configs.todowatch.forEach(function (v) {
    watchPath.push(path.join(__dirname, '..', v));
});


var todoTask = {
    compileTodo: function () {
        console.log('watchPath', watchPath);
        return gulp.src(watchPath, {base: './'})
            .pipe($.todo())
            .pipe(gulp.dest('./app/'))
    }
}

module.exports = todoTask;
