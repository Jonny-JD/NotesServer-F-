import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import {deleteAsync} from 'del';
import browserSync from "browser-sync";
import concat from "concat";

var srcPaths = {
    css: "src/css/**/*.css",
    html: "src/*.html",
    img: "src/img/*"
}

var buildPaths = {
    root: "build",
    css: "build/css",
    img: "build/img"
}

function clearBuild() {
    return deleteAsync("build/*");
}

function css () {
    return gulp.src(srcPaths.css)
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest(buildPaths.css))
    .pipe(browserSync.stream());
}

function img () {
    return gulp.src(srcPaths.img)
    .pipe(gulp.dest(buildPaths.img))
}

function html () {
    return gulp.src(srcPaths.html)
    .pipe(gulp.dest(buildPaths.root))
    .pipe(browserSync.stream());
}


let build = gulp.series(clearBuild, gulp.parallel(css, img, html));

gulp.task("build", build);

gulp.task("watch", gulp.series(build, function () {
        browserSync.init({
            server: {
                baseDir: buildPaths.root
            }
    });
    gulp.watch(srcPaths.css, css);
    gulp.watch(srcPaths.html, html);
}))