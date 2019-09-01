var gulp = require('gulp'); //引入模块

//布置任务
gulp.task('default', [], function () {
    console.log('default任务');
});
gulp.task('copyhtml', function () {
    return gulp.src('src/index.html').pipe(gulp.dest('dist/html'));
});