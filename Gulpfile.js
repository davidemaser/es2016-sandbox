var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default",()=> {
	return gulp.src("scr/app.js")
		.pipe(babel())
		.pipe(gulb.des("dist"));
});
