const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
    return src('src/**.html')
        .pipe(dest('dist'))
}

function css() {
    return src('src/**.css')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(dest('dist'))
}

function js() {
    return src('src/**.js')
        .pipe(dest('dist'))
}

exports.html = html
exports.css = css
exports.js = js