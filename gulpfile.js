'use strict';

var gulp = require('gulp'), // Requis
    gp = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './build'; // dossier à livrer

/**
 * ---------------------- PUG vers HTML ---------------------------
 */
gulp.task('pug', function () {
    return gulp.src(source + '/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .pipe(gulp.dest(destination));
});

/**
 * ---------------------- STYLUS vers CSS ---------------------------
 * CSSO => Minifier CSS
 */
gulp.task('stylus', function(){
    return gulp.src(source + '/static/stylus/main.styl')
        .pipe(gp.stylus({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .pipe(gp.csso())
        .pipe(gulp.dest(destination + '/static/css/'));
});