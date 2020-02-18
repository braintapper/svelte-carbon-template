gulp   = require('gulp')
coffee = require("gulp-coffee")

sourcePaths = ["src/_helpers/**/*.coffee"]

module.exports = (cb)->
  destinationPath = "src/helpers"
  stream = gulp.src(sourcePaths).pipe(coffee({bare:true})).pipe(gulp.dest(destinationPath))
  stream.on 'end', ()->
    console.log "_helper compiled to #{destinationPath}"
    cb()
module.exports.watch = sourcePaths
module.exports.displayName = "svelte-helper"
