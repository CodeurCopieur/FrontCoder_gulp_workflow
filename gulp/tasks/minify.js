/**
 * ---------------------- SASS vers CSS ---------------------------
 * SOURCEMAPS => 
 * AUTOPREFIXER => Ajouter automatiquement les préfixes CSS3
 * CSSO => Minifier CSS
 */
module.exports = function () {
    $.gulp.task('minify', function(){
        return $.gulp.src($.dest + '/static/css/main.css')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.csso())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.dest + '/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}