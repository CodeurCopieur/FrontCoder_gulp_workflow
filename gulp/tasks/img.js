// Optimizing Images 
module.exports = function () {
   $.gulp.task('images', function(){
       return $.gulp.src($.src + '/static/img/**/*.+(png|jpg|gif|svg)')
       .pipe($.gp.imagemin({
           interlaced: true
       }))
       .pipe($.gulp.dest($.dest + '/static/images'))
   });
};