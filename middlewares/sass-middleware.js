module.exports = function(BaseDir) {

    var sassMiddleware = function (req, res, next) {

        var parsed = require("url").parse(req.url);
        if (parsed.pathname.match(/\.scss$/)) {


            return sass(BaseDir+parsed.pathname)
            .then(function(css){
                res.setHeader('Content-Type', 'text/css');
                res.end(css);
            });

        }
        next();
    }

    function sass(src) {

        var f = require('fs').readFileSync(src).toString();
        
        
        return new Promise(function(resolve,reject) {

            require('node-sass').render({ data:f}, function(err, result) {

                if(err) {
                    console.log('**** : Sass compiling error',err);
                    reject();

                }
                else {
                    // res.setHeader('Content-Type', 'text/css');
                    // res.end(result.css.toString());
                    resolve(result.css.toString());
                }
                

            })
            
        })

    }

    return sassMiddleware;
}
