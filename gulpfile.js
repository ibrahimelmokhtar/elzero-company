// Import Dependencies:
import gulp from 'gulp';
import imagewebp from 'gulp-webp';
import { deleteAsync } from 'del';
import minify from 'gulp-clean-css';

/**
 * @description Convert (.png, .jpg) Images Into (.webp) Images.
 */
const convertImages = () => {
    return gulp.src('assets/**/*.{png,jpg}')
            .pipe(imagewebp())
            .pipe(gulp.dest('assets'));
};

/**
 * @description Delete (.png, .jpg) Images.
 */
const deleteImages = async () => {
    return await deleteAsync(['assets/**/*.{png,jpg}']);
};

/**
 * @description Minify CSS Files.
 */
const minifyStyles = () => {
    return gulp.src('css/normalize.css')
            .pipe(minify())
            .pipe(gulp.dest('css'));
};

// Main Sequence:
export default gulp.series(
    convertImages,
    deleteImages,
    minifyStyles,
);
