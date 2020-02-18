gulp   = require('gulp')
sass = require ('gulp-sass')

watchPath = ["src/_sass/**/*.sass"]
sourcePath = ["src/_sass/global.sass"]
destinationPath = "./public/css"

module.exports = ()->
  console.log sourcePath
  console.log destinationPath
  gulp.src(sourcePath).pipe(sass({indentedSyntax: true}).on('error', sass.logError)).pipe(gulp.dest(destinationPath))


module.exports.watch = watchPath
module.exports.displayName = "sass"
