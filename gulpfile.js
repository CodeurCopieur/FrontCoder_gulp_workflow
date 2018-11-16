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
 * SOURCEMAPS => 
 * AUTOPREFIXER => Ajouter automatiquement les préfixes CSS3
 * CSSO => Minifier CSS
 */
gulp.task('stylus', function(){
    return gulp.src(source + '/static/stylus/main.styl')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.stylus({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .on("error", gp.notify.onError({
            title: "stile"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest(destination + '/static/css/'));
});

gulp.task('watch', function(){
    gulp.watch(source + '/pug/**/*.pug', ['pug']);
    gulp.watch(source + '/static/stylus/**/*.styl', ['stylus'])
});


gulp.task('build', ['pug', 'stylus', 'watch']);

gulp.task('default', ['build'])