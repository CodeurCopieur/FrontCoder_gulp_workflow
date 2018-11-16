'use strict';

var gulp = require('gulp'), // Requis
    gp = require('gulp-load-plugins')(), // tous les plugins de package.json
    browserSync = require('browser-sync').create();

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './build'; // dossier à livrer

/**
 * ---------------------- BROWSER-SYNC ---------------------------
 * Static Server + watching scss/pug files
 */
gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

});



/**
 * ---------------------- PUG vers HTML ---------------------------
 */
gulp.task('pug', function () {
    return gulp.src(source + '/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .pipe(gulp.dest(destination))
        .on('end',browserSync.reload);
});

/**
 * ---------------------- SASS vers CSS ---------------------------
 * SOURCEMAPS => 
 * AUTOPREFIXER => Ajouter automatiquement les préfixes CSS3
 * CSSO => Minifier CSS
 */
gulp.task('sass', function(){
    return gulp.src(source + '/static/sass/main.scss')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.plumberNotifier())
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .on("error", gp.notify.onError({
            title: "stile"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest(destination + '/static/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function(){
    gulp.watch(source + '/pug/**/*.pug', ['pug']);
    gulp.watch(source + '/static/sass/**/**/*.scss', ['sass'])
});


gulp.task('build', ['pug', 'sass', 'watch', 'serve']);

gulp.task('default', ['build'])