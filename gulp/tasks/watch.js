module.exports = function () {
    $.gulp.task('watch', function(){
        $.gulp.watch($.src + '/pug/**/*.pug', ['pug']);
        $.gulp.watch($.src + '/static/sass/**/**/*.scss', ['sass'])
    });
}