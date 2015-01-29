var express = require('express');
var app = express();

console.log(__dirname + '/build');
app.use(express.static(__dirname + '/build'));

var server = app.listen(3000, function () {
    'use strict';
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
