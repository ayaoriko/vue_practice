// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
const pug = require("gulp-pug");
var sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
// エラーを無視する&通知
var plumber = require("gulp-plumber");
var notify  = require("gulp-notify");


const paths = {
  css: {
    src: ['./scss/**/*.scss', '!./scss/**/_*.scss'], // ソースファイル
    dest: './css' // 出力ファイル
  },
  html: {
    src: ['./pug/**/*.pug', '!./pug/**/_*.pug'], // ソースファイル
    dest: './' // 出力ファイル
  }
};

// style.scssをタスクを作成する
gulp.task("scss", function() {
    return gulp.src(paths.css.src)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write({
      includeContent: true
    }))
    .pipe(gulp.dest('./css/'))
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>") //<-
  }))
  .pipe(pug({
    pretty: true
  })
  ).pipe(gulp.dest(paths.html.dest));
});

const { series } = require('gulp');

//exports.default = series('scss', 'html' );

// 自動監視のタスクを作成
gulp.task('default-watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.task('scss'));
  gulp.watch('./pug/**/*.pug', gulp.task('html'));
});
