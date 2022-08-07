// Import Dependencies:
import gulp from 'gulp';
import imagewebp from 'gulp-webp';

/**
 * @description Convert (.png, .jpg) Images Into (.webp) Images.
 */
const convertImages = () => {
    return gulp.src('assets/**/*.{png,jpg}')
            .pipe(imagewebp())
            .pipe(gulp.dest('build/assets'));
};
gulp.task('convertImages', convertImages);

// Watch Created Tasks:
gulp.task('watch', () => {
    gulp.watch([ 'assets', '!assets/fonts'], gulp.series('convertImages'));
});
