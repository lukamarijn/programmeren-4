/**
 * Created by lukab on 4-5-2017.
 */


var http = require('http');
var express = require('express');
var config = require('./tsconfig.json')
var app = express();

app.set('PORT', config.webPort);
var port = process.env.PORT || app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})

app.use('/api/v1', require('./routes/routes_api_v1'));


app.get('/api/v1/hello', function(req, res, next) {
    res.contentType('application/json');
    res.json( { "msg" : "Test oefening 1" } );
});


app.listen(port, function() {
    console.log("The magic happens at http://localhost: 8080");
});
