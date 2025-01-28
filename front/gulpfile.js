import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import GulpCleanCss from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import GulpPostCss from "gulp-postcss";
import GulpLess from "gulp-less";
import postcssSortMediaQueries from "postcss-sort-media-queries";

var isDev = process.argv.includes("--dev");
var isProd = !isDev;

//var cssPaths = ["src/css/main.css", "src/css/style.css"];

var srcPaths = {
  css: "src/css/**/*.less",
  html: "src/*.html",
  img: "src/img/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)",
  fonts: "src/fonts/*",
};

var buildPaths = {
  root: "build",
  css: "build/css",
  img: "build/img",
  fonts: "build/fonts/",
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

  return (
    gulp
      .src(["src/css/styles.less", "src/css/create_page.less", "src/css/discover_page.less", "src/css/search_page.less", "src/css/note_page.less"])
      .pipe(gulpIf(isDev, sourcemaps.init()))
      .on("error", function () {
        console.log(error.toString());
        this.emit("end");
      })
      .pipe(GulpLess())
      .pipe(GulpPostCss(plugins))
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(gulpIf(isProd, GulpCleanCss({ level: 1 })))
      .pipe(gulpIf(isDev, sourcemaps.write()))
      .pipe(gulp.dest(buildPaths.css))
      .pipe(browserSync.stream())
  );
}

function img() {
  return gulp
    .src(srcPaths.img, { encoding: false })
    .pipe(gulp.dest(buildPaths.img))
    .pipe(browserSync.stream());
}

function fonts() {
  return gulp.src(srcPaths.fonts, { encoding: false })
  .pipe(gulp.dest(buildPaths.fonts, {encoding: false}));
}

function html() {
  return gulp
    .src(srcPaths.html)
    .pipe(gulp.dest(buildPaths.root))
    .pipe(browserSync.stream());
}

let build = gulp.series(clearBuild, gulp.parallel(css, img, html, fonts));

//Tasks

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
    gulp.watch(srcPaths.fonts, fonts);
    gulp.watch(srcPaths.img, img);
  })
);
