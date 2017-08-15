var express = require('express');
var app = express();

var port = 3000;


server.get('/', function(req, res) {
  res.send('Heckle Me');

});

app.listen(port,function(err) {
  console.log('The server is running on port:' + port);

});

// server model 

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req,res) => {  
 res.StatusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Heckle Me Silly !\n');

});


server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');

});
