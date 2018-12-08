/**
 * ---------------------- PUG vers HTML ---------------------------
 */
module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src($.src + '/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .on("error", $.gp.notify.onError({
                title: "stile"
            }))
            .pipe($.gulp.dest($.dest))
            .on('end',$.bs.reload);
    });
}