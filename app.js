var express = require('express');
var app = express();

var port = 3000;

app.get('/',function(req,res) {
 res.send('We rule');

});


app.listen(port,function(err) {
  console.log('The server is running on port:' + port);

});



var aloha = 'Heckle Designing Baby!';
console.log(aloha);

console.log('What\'s Up!');
