module.exports = function(BaseDir) {

    var sassMiddleware = function (req, res, next) {

        var parsed = require("url").parse(req.url);
        if (parsed.pathname.match(/\.scss$/)) {

            var f = require('fs').readFileSync(BaseDir+parsed.pathname).toString();

            require('node-sass').render({ data:f}, function(err, result) {

                if(err) {
                    console.log('**** : Sass compiling error');
                    next();

                }
                
                res.setHeader('Content-Type', 'text/css');
                res.end(result.css.toString());

            })

        }
        next();
    }

    return sassMiddleware;
}
