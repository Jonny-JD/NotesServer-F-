import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import concat from "gulp-concat";
import GulpCleanCss from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import gulpPurgeCSS from "gulp-purgecss";
import GulpPostCss from "gulp-postcss";

import postcssSortMediaQueries from "postcss-sort-media-queries";

var isDev = process.argv.includes("--dev");
var isProd = !isDev;

var cssPaths = ["src/css/main.css", "src/css/style.css"];

var srcPaths = {
  css: "src/css/**/*.css",
  html: "src/*.html",
  img: "src/img/*",
};

var buildPaths = {
  root: "build",
  css: "build/css",
  img: "build/img",
};

function clearBuild() {
  return deleteAsync("build/*");
}

function css() {
  var plugins = [
    postcssSortMediaQueries({
      sort: "desktop-first",
    }),
  ];

  return gulp
    .src(cssPaths)
    .pipe(
      gulpIf(
        isDev,
        gulpPurgeCSS({
          content: [srcPaths.html],
        })
      )
    )
    .on("error", function () {
        console.log(error.toString());
        this.emit("end");
      })
    .pipe(gulpIf(isProd, sourcemaps.init()))
    .pipe(concat("style.css"))
    .pipe(GulpPostCss(plugins))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulpIf(isProd, GulpCleanCss({ level: 1 })))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulp.dest(buildPaths.css))
    .pipe(browserSync.stream());
}

function img() {
  return gulp.src(srcPaths.img).pipe(gulp.dest(buildPaths.img));
}

function html() {
  return gulp
    .src(srcPaths.html)
    .pipe(gulp.dest(buildPaths.root))
    .pipe(browserSync.stream());
}

let build = gulp.series(clearBuild, gulp.parallel(css, img, html));

gulp.task("build", build);

gulp.task(
  "watch",
  gulp.series(build, function () {
    browserSync.init({
      server: {
        baseDir: buildPaths.root,
      },
    });
    gulp.watch(srcPaths.css, css);
    gulp.watch(srcPaths.html, html);
  })
);
