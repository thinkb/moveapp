var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');

var app = express();

var db = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var appEnv = cfenv.getAppEnv();

var router = express.Router();

router.route('/users')
  .get(function(req, res){

    res.json({json: db});

  }).post(function(req, res){
    console.log('post');

    db.push(req.body);

    res.json({message: "Usuario cadastrado com sucesso"});
  });


app.use('/move', router);
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
