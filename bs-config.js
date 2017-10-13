var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;
console.log(BaseDir);
module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html"],
    "server" : {
        "baseDir" : BaseDir
    },
    serveStatic: ['.', './shared']
  //  "browser" : ["google-chrome", "firefox"]
}