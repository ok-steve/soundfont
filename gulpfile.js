'use strict';

const gulp = require('gulp');

const browserSync = require('browser-sync');
const del = require('del');

const htmlreplace = require('gulp-html-replace');

const csscomb = require('gulp-csscomb');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const calc = require('postcss-calc');
const customProperties = require('postcss-custom-properties');
const importCss = require('postcss-import');

const jspm = require('gulp-jspm');
const modernizr = require('gulp-modernizr');


/**
 * Unorganized tasks
 */

gulp.task('modernizr', () => {
  return gulp.src([
    'src/css/**/*.css',
    'src/js/**/*.js'
  ]).pipe(modernizr()).pipe(gulp.dest('dist/js'));
});


/**
 * Primary tasks
 */

gulp.task('clean', del.bind(null, [
  'dist'
]));

gulp.task('copy', () => {
  return gulp.src([
    'src/*.{txt,json,js,ico,xml}'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('styles:serve', () => {
  // TODO stylelint
  return gulp.src([
    'src/css/**/*.css'
  ]).pipe(csscomb()).pipe(gulp.dest('src/css')).pipe(browserSync.stream());
});

gulp.task('scripts:serve', () => {
  // TODO es6lint
  return gulp.src([
    'src/js/**/*.js'
  ]).pipe(gulp.dest('src/js')).pipe(browserSync.stream());
});

gulp.task('pages', () => {
  // TODO minify
  return gulp.src([
    'src/**/*.html',
    '!src/jspm_packages/**'
  ]).pipe(htmlreplace({
    'js': 'js/main.bundle.js',
    'modernizr': 'js/modernizr.js'
  })).pipe(gulp.dest('dist'));
});

gulp.task('styles', [
  'styles:serve'
], () => {
  // TODO minify
  return gulp.src([
    'src/css/main.css'
  ]).pipe(postcss([
    importCss(),
    customProperties(),
    calc(),
    autoprefixer()
  ])).pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', [
  'scripts:serve',
  'modernizr'
], () => {
  // TODO polyfills (fetch, promise)
  gulp.src([
    'src/js/main.js'
  ]).pipe(jspm({
    selfExecutingBundle: true,
    //minify: true,
    skipSourceMaps: true
  })).pipe(gulp.dest('dist/js'));
});

gulp.task('assets', [], () => {
  return gulp.src([
    'src/img/*.{png,svg}'
  ]).pipe(gulp.dest('dist/img'));
});


/**
 * Composite tasks
 */

gulp.task('serve', [
  'styles:serve',
  'scripts:serve'
], () => {
  browserSync.init({
    open: false,
    server: 'src'
  });

  gulp.watch([
    'src/**/*.html'
  ]).on('change', browserSync.reload);

  gulp.watch('src/css/**/*.css', [
    'styles:serve'
  ]);

  gulp.watch('src/js/**/*.js', [
    'scripts:serve'
  ]);
});

gulp.task('build', [
  'copy',
  'pages',
  'styles',
  'scripts',
  'assets'
]);

gulp.task('watch', [
  'build'
], () => {
  gulp.watch('src/**/*.html', [
    'pages'
  ]);

  gulp.watch('src/css/**/*.css', [
    'styles'
  ]);

  gulp.watch('src/js/**/*.js', [
    'scripts'
  ]);
});

gulp.task('default', [
  'clean'
], () => {
  gulp.start('build');
});
