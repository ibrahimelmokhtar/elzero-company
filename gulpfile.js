// Import Dependencies:
import gulp from 'gulp';
import imagewebp from 'gulp-webp';
import { deleteAsync } from 'del';

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

// Main Sequence:
export default gulp.series(
    convertImages,
    deleteImages,
);
