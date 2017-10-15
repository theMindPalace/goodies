var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;

/**Middlewares */

var _middlewares = require('./middlewares');
var middlewares = _middlewares.init(BaseDir);
module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html",BaseDir+"/**/*.scss",BaseDir+"/**/*.less"],
    "server" : {
        "baseDir" : BaseDir,
        "middleware" : middlewares
    },
    serveStatic: ['.', './shared']
  //  "browser" : ["google-chrome", "firefox"]
}