var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var print = fs.readFileSync('index.html');
print = print.toString();

app.get('/', function(request, response) {
  response.send(print);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
