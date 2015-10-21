var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    /**
     * Read out the requested HTML file here,
     * in case of a 404 Error, you should write
     * an error to the page and set the correct
     * status code.
     */
    res.end();
});

server.listen(/* port */)
