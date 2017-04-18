var http = require('http');
var person = require('./person');


http.createServer( function(request, response) {

	console.log('REQUEST:' + JSON.stringify(request.headers));
	response.writeHead(200, {
		'Content-Type' : 'application/json'
	});

//	response.end( JSON.stringify( 
//		{ 
//			user : 'Luka', 
//			id : 6 
//		}
//		)
//	)

	response.end( JSON.stringify(person.i18l('uk')))
}).listen(8080);

console.log('Magic starts at 8080')