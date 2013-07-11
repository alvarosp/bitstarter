var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var dataRead;
fs.readFile('index.html',function(err, data){
	dataRead = data;
});

app.get('/', function(request, response) {
	response.send(dataRead.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
