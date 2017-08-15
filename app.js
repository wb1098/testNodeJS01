var express = require('express');
var app = express();

var port = 3000;


app.get('/', function(req, res) {
  res.send('Heckle Me');

});

app.get('/routing', function(req, res) {
  res.send('Heckle Tomorrow');

});


app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('node_modules'));



app.listen(port,function(err) {
  console.log('The server is running on port:' + port);

});