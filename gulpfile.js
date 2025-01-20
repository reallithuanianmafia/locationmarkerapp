const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// SCSS compilation task
gulp.task('styles', function () {
    return gulp.src('scss/**/*.scss') // Compile all SCSS files
        .pipe(sass().on('error', sass.logError)) // Handle errors gracefully
        .pipe(gulp.dest('css')); // Output the compiled CSS files into 'css' folder
});

// Watch task to recompile SCSS on changes
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('styles'));
});

// Default task (run 'styles' first, then start 'watch')
gulp.task('default', gulp.series('styles', 'watch'));
