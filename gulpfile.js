var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
    gulp.src(['./src/ts/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./public/scripts'));
});

gulp.task('connect', function() {
    connect.server({
        root: [__dirname + "/public"]
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', ['webpack']);
});

gulp.task('default', ['webpack', 'watch', 'connect']);