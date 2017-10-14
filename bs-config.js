var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;

/**Middlewares */

var sassMiddleware = require('./middlewares/sass-middleware')(BaseDir);

module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html"],
    "server" : {
        "baseDir" : BaseDir,
        "middleware" : {
            2 : sassMiddleware
        }
    },
    serveStatic: ['.', './shared']
  //  "browser" : ["google-chrome", "firefox"]
}