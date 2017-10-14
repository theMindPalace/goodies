var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;

/**Middlewares */

var sassMiddleware = require('./middlewares/sass-middleware')(BaseDir);
var lessMiddleware = require('./middlewares/less-middleware')(BaseDir);

module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html",BaseDir+"/**/*.scss",BaseDir+"/**/*.less"],
    "server" : {
        "baseDir" : BaseDir,
        "middleware" : {
            2 : sassMiddleware,
            3 : lessMiddleware
        }
    },
    serveStatic: ['.', './shared']
  //  "browser" : ["google-chrome", "firefox"]
}