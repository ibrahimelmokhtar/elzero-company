// Import Dependencies:
import gulp from 'gulp';
import imagewebp from 'gulp-webp';
import minify from 'gulp-clean-css';
import purgecss from 'gulp-purgecss';
import rename from 'gulp-rename';

/**
 * @description
 */
const syncFontAwesome = () => {
    return gulp.src('plugins/fontawesome-*/webfonts/*')
            .pipe(gulp.dest('build/plugins'));
};
gulp.task('syncFontAwesome', syncFontAwesome);

/**
 * @description Convert (.png, .jpg) Images Into (.webp) Images.
 */
const convertImages = () => {
    return gulp.src('assets/**/*.{png,jpg}')
            .pipe(imagewebp())
            .pipe(gulp.dest('build/assets'));
};
gulp.task('convertImages', convertImages);

/**
 * @description Remove unused CSS Rules.
 */
const unusedCSS = () => {
    return gulp.src([ '**/*.css', '!build/**/*.css' ])
            .pipe(purgecss({ content: ['**/*.html'] }))
            .pipe(gulp.dest('build'));
};
gulp.task('unusedCSS', unusedCSS);

/**
 * @description Minify CSS Files.
 */
const minifyStyles = () => {
    return gulp.src([ 'build/**/*.css', '!build/**/*.min.css' ])
            .pipe(minify({}))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('build'));
};
gulp.task('minifyStyles', minifyStyles);

/**
 * @description Watch Specific Tasks.
 */
const watchTasks = () => {
    gulp.watch([ 'assets', '!assets/fonts'], gulp.series('convertImages'));
    gulp.watch([ 'css/*.css' ], gulp.series('unusedCSS'));
    gulp.watch([ 'build/**/*.css', '!build/**/*.min.css'], gulp.series('minifyStyles'));
};
gulp.task('watchTasks', watchTasks);

export default gulp.series([
    convertImages,
    unusedCSS,
    syncFontAwesome,
    minifyStyles,
    watchTasks
]);
