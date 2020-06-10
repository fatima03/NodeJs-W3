var http = require('http');
var url = require('url');

http.createServer( function( req, res ){
    console.log('Running');
    res.writeHead(200, {'Contetn-Type': 'text\html'});
    var u = url.parse(req.url, true).query;
    var txt = u.year + " " + u.month;
    res.end(txt);
}).listen(8080);