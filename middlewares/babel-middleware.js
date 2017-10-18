var options =  {
  "presets": ["es2015"]
}
module.exports = function(BaseDir) {

    var babelMiddleware = function (req, res, next) {

        var parsed = require("url").parse(req.url);
        if (parsed.pathname.match(/\.js$/)) {


            return babel(BaseDir+parsed.pathname)
            .then(function(code){
                res.setHeader('Content-Type', 'text/css');
                res.end(code);
            });

        }
        next();
    }

    function babel(src) {
        
        
        return new Promise(function(resolve,reject) {


            require("babel-core",options).transformFile(src, {}, function (err, result) {
                if(err) {
                    console.log('**** : Babel compiling error',err);
                    reject();

                }
                    resolve(result.code); // => { code, map, ast }
                });
        })
            

    }

    return babelMiddleware;
}
