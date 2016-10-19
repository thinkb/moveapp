var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');

var app = express();

var db = [];

var debugUser = {
  name: "Fabiano",
  last: "Moraes",
  age: 25,
  email: "fabs@gmail",
  nick: "fabiano",
  pwd: "fabs",
  sport: "comer",
  sloth: "Lazy"
};

db.push(debugUser);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var appEnv = cfenv.getAppEnv();

var router = express.Router();

router.route('/login')
  .get(function(req, res){
    //res.json(db);
  }).post(function(req, res){

    var i;
    for(i=0; i<db.length; i++) {
      if(db[i].nick == req.body.nick && db[i].pwd == req.body.pwd) {
        res.json(1);
      } else {
        res.json(0);
      }
    }
  });

router.route('/register')
  .get(function(req, res){

    //res.json('');

  }).post(function(req, res){

    db.push(req.body);
    console.log('Usuário cadastrado com sucesso!');
    res.json('');
  });


app.use('/move', router);
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});



// router.route('/x')
//   .get(function(req, res){
//     //res.json();
//
//   }).post(function(req, res){
//
//     //res.json('');
//   });

// bluemix api https://api.ng.bluemix.net
// bluemix login -u famarcon@br.ibm.com -o famarcon@br.ibm.com -s dev
