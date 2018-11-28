/**
 * ---------------------- FONTS COPY ---------------------------
 *
 * Simple copy of FONTS files to dist directory on file change.
 */
module.exports = function () {
    $.gulp.task('fonts:copy', function() {
        return $.gulp.src($.src + '/static/fonts/**/*.*')
            .pipe($.gulp.dest($.dest + '/static/fonts'));
    });

};
