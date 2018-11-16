'use strict';
/*
var gulp = require('gulp'), // Requis
    gp = require('gulp-load-plugins')(), // tous les plugins de package.json
    browserSync = require('browser-sync').create();
*/

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

/*
// Variables de chemins
var source = './src'; // dossier de travail
var destination = './build'; // dossier à livrer*/



$.gulp.task('build', ['pug', 'sass', 'watch', 'serve']);

$.gulp.task('default', ['build'])