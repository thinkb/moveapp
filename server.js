var express = require('express');
var app = express();
console.log(__dirname);
app.use(express.static(__dirname + '/www'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(8781); // 80
