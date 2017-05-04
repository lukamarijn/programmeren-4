/**
 * Created by lukab on 4-5-2017.
 */


var http = require('http');
var express = require('express');
var config = require('./tsconfig.json')
var app = express();

app.set('PORT', config.webPort);
var port = process.env.PORT || app.get('PORT');
app.all('*', function (req, res, next) {
    console.log( req.method + "" + req.url) ;
    next();
});

app.get('/api/v1/hello', function(req, res, next) {
    res.contentType('application/json');
    res.json( { "msg" : "Test oefening 1" } );
});


app.listen(port, function() {
    console.log("The magic happens at http://localhost: 8080");
});
