const {src, dest} = require("gulp")
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const cssbeautify = require("gulp-cssbeautify")
const imagemin = require("gulp-imagemin")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const cssnano = require("gulp-cssnano")
const stripcsscomments = require("gulp-strip-css-comments")
const autoprefixer = require("gulp-autoprefixer")
const rename = require("gulp-rename")
const del = require("del")
const browserSync = require("browser-sync")

/* Paths */
const srcPath = "src/"
const distPath = "dist/"

const path = {
    build: {
        html: distPath,
        css: distPath + "css/",
        js: distPath + "js/",
        fonts: distPath + "fonts/",
        items: distPath + "items/",
    },
    src: {
        html: srcPath + "*.html",
        css: srcPath + "scss/*.scss",
        js: srcPath + "js/*.js",
        items: srcPath + "items/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        html: srcPath + "**/*.html",
        css: srcPath + "scss/**/*.scss",
        js: srcPath + "js/**/*.js",
        items: srcPath + "items/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    clean: "./" + distPath
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        }
    })
}

function html() {
    return src(path.src.html, {base: srcPath})
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}))
}

function scss() {
    return src([
        "node_modules/normalize.css/normalize.css",
        "node_modules/swiper/swiper-bundle.css"
    ])
        .pipe(autoprefixer())
        .pipe(concat("libs.min.css"))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(stripcsscomments())
        .pipe(dest(distPath + "css/"))
}

function css() {
    return src(srcPath + "scss/style.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(stripcsscomments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}))
}

function js() {
    return src(path.src.js, {base: srcPath + "js/"})
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
}

function script() {
    return src([
        "node_modules/swiper/swiper-bundle.js",
    ])
        .pipe(concat("libs.min.js"))
        .pipe(uglify())
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
}

function items() {
    return src(path.src.items, {base: srcPath + "items/"})
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 80, progressive: true}),
            imagemin.optipng({optimizationLevel: 4}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(path.build.items))
        .pipe(browserSync.reload({stream: true}))
}

function fonts() {
    return src(path.src.fonts, {base: srcPath + "fonts/"})
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}))
}

function clean() {
    return del(path.clean)
}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.items], items)
    gulp.watch([path.watch.fonts], fonts)
}

const build = gulp.series(clean, gulp.parallel(html, scss, css, script, js, items, fonts))
const watch = gulp.parallel(build, watchFiles, serve)


exports.html = html
exports.scss = scss
exports.css = css
exports.script = script
exports.js = js
exports.items = items
exports.fonts = fonts
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = watch