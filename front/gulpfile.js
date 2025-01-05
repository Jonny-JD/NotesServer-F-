import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import {deleteAsync} from 'del';

var srcPaths = {
    css: "src/css/**/*.css",
    html: "src/*.html",
    img: "src/img/*",
}

var buildPaths = {
    root: "build",
    css: "build/css",
    img: "build/img",
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
}

function img () {
    return gulp.src(srcPaths.img)
    .pipe(gulp.dest(buildPaths.img))
}

function html () {
    return gulp.src(srcPaths.html)
    .pipe(gulp.dest(buildPaths.root))
}


let build = gulp.series(clearBuild, gulp.parallel(css, img, html));

gulp.task("build", build);
gulp.task("watch", gulp.series(build, function () {
    gulp.watch(buildPaths.css, css);
    gulp.watch(buildPaths.root, html);
}))