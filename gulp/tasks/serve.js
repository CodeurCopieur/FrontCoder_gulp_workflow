/**
 * ---------------------- BROWSER-SYNC ---------------------------
 * Static Server + watching scss/pug files
 */
 module.exports = function () {
    $.gulp.task('serve', function(){
        $.bs.init({
            server: {
                baseDir: "./build"
            }
        });
    
    });
}