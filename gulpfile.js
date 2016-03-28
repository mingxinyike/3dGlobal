var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    // watch = require('gulp-watch'),
    // sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');


// gulp.task('sass', function () {
//     return sass('./styles/main.scss')
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(gulp.dest('./styles'));
// });

gulp.task('connect', function() {
    connect.server();
});


// gulp.task('watch',function() {
//     gulp.watch('./styles/*.scss').on('change',livereload.changed);
//     gulp.watch('./view/*.html').on('change',livereload.changed);
//     gulp.watch('./styles/*.scss', function(){
//         gulp.run('sass');
//     });
// })

gulp.task('default',['connect'],function(){
    livereload.listen();

})
