'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    src: './src',
    dest: './build',

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


$.gulp.task('build', ['pug', 'sass', 'scripts:lib', 'scripts', 'images','fonts:copy', 'watch', 'serve']);

$.gulp.task('default', ['build'])