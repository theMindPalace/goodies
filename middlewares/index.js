
var sassMiddleware = require('./sass-middleware');
var lessMiddleware = require('./less-middleware');
var babelMiddleware = require('./babel-middleware');



module.exports.init =  function(baseDir) {

    return {
        0: sassMiddleware(baseDir),
        1: lessMiddleware(baseDir),
        2: babelMiddleware(baseDir)
    }
}