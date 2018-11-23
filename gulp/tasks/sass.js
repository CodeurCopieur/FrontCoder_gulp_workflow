/**
 * ---------------------- SASS vers CSS ---------------------------
 * SOURCEMAPS => 
 * AUTOPREFIXER => Ajouter automatiquement les préfixes CSS3
 * CSSO => Minifier CSS
 */
module.exports = function () {
    $.gulp.task('sass', function(){
        return $.gulp.src($.src + '/static/sass/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.plumberNotifier())
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", $.gp.notify.onError({
                title: "stile"
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.cssbeautify({indent: ' '}))
            //.pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.dest + '/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}