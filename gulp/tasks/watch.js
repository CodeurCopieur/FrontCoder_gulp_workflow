module.exports = function () {
    $.gulp.task('watch', function(){
        $.gulp.watch($.src + '/pug/**/*.pug', ['pug']);
        $.gulp.watch($.src + '/static/sass/**/**/*.scss', ['sass'])
        $.gulp.watch($.src + '/static/js/main.js', ['scripts'])
        $.gulp.watch($.src + '/static/img/*', ['images'])
        $.gulp.watch($.src + '/static/img/*', ['images'])
    });
}