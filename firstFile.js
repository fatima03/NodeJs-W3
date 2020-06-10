var http = require('http');
var dt = require('./fistModule');

http.createServer(  function( req, res ){
    res.writeHead(200, {'Contetn-Type': 'text\html'});
    res.write('Date & Time is \n'+dt.myDateTime());
    res.write('\nUrl is:' + req.url);
    // res.end('Hello World!');
    res.end();
}).listen(8080);