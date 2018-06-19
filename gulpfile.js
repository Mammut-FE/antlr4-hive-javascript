const gulp = require("gulp");

gulp.task("move", () => {
  gulp.src("src/**").pipe(gulp.dest("lib"));
});

gulp.task("default", ["move"]);
