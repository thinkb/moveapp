var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var loki = require('lokijs');

var app = express();

var db = new loki('loki.json');
var users = db.addCollection('users');
var debugUser = {
  name: "Fabiano",
  last: "Moraes",
  age: 25,
  email: "fabs@gmail",
  nick: "fabiano",
  pwd: "fabs",
  sport: "comer",
  sloth: "Preguicinha"
};

var debugUser1 = {
  name: "dsfasfd",
  last: "asdfsdfsd",
  age: 25,
  email: "asdfasdf@gmail",
  nick: "asdfadsfas",
  pwd: "fabs",
  sport: "asdfasdf",
  sloth: "asdfasdf"
};

users.insert(debugUser);
users.insert(debugUser1);

// var f = users.find({nick: 'fabiano'});
// if(f.length!=0){
//   console.log(f);
// } else {
//   console.log('no');
// }


app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var appEnv = cfenv.getAppEnv();

var router = express.Router();

router.route('/login')
  .get(function(req, res){
    //res.json(db);
  })
  .post(function(req, res) {

    var findResults = users.find({nick: req.body.nick, pwd: req.body.pwd});

    console.log(findResults);

    if(findResults[0].nick == req.body.nick && findResults[0].pwd == req.body.pwd){
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });

router.route('/register')
  .get(function(req, res){

    //res.json('');

  }).post(function(req, res){
    users.insert(req.body);
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
