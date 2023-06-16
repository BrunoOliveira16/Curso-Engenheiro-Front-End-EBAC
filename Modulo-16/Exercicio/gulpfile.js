const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');

function comprimirImagem() {
    return gulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/images'));
}

function comprimirJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compilarSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilarSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimirJS));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimirImagem));
}