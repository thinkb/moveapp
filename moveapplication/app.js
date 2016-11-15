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
  sloth: "Preguicinha",
  points: 0,
  level: 1,
  bambole: 1,
  basquete: 1,
  caminhada: 1,
  corrida: 1,
  futebol: 1,
  pular: 1,
  s1: 1,
  s2: 1,
  s3: 1,
  s4: 1,
  s5: 1,
  s6: 1,
  s7: 1,
  s8: 1,
  corridavalor: 1,
  caminhadavalor: 1,
  bambolevalor: 1,
  pularvalor: 1,
  basquetevalor: 1,
  futebolvalor: 1
};

var debugUser1 = {
  name: "Beatriz",
  last: "Andrade",
  age: 12,
  email: "beatriz@gmail.com",
  nick: "bia",
  pwd: "bia123",
  sport: "basquete",
  sloth: "meg",
  points: 30,
  level: 2,
  bambole: 1,
  basquete: 1,
  caminhada: 1,
  corrida: 2,
  futebol: 2,
  pular:1,
  s1: 1,
  s2: 1,
  s3: 2,
  s4: 1,
  s5: 1,
  s6: 2,
  s7: 1,
  s8: 1,
  corridavalor: 75,
  caminhadavalor: 1,
  bambolevalor: 1,
  pularvalor: 1,
  basquetevalor: 1,
  futebolvalor: 20
};

users.insert(debugUser);
users.insert(debugUser1);

var pais = db.addCollection('pais');
var paisuser1 = {
  namepai: "dsfasfd",
  lastpai: "asdfsdfsd",
  emailpai: "asdfasdf@gmail",
  pwdpai: "fabs"
};

users.insert(paisuser1);

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

    if(findResults[0].nick == req.body.nick && findResults[0].pwd == req.body.pwd){
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });

router.route('/register')
  .get(function(req, res){

    //

  }).post(function(req, res){
    users.insert(req.body);
    console.log('Usuário cadastrado com sucesso!');
    res.json('');
  });

router.route('/user')
  .get(function(req, res){
      //res.json();

    }).post(function(req, res){
      var findResults = users.find({nick: req.body.nick, pwd: req.body.pwd});
      res.json(findResults[0]);
    });


    router.route('/desafios')
      .get(function(req, res){
        //res.json(db);
      })
      .post(function(req, res) {

        var findResults = users.find({nick: req.body.nick, pwd: req.body.pwd});

        if(findResults[0].nick == req.body.nick && findResults[0].pwd == req.body.pwd){
          res.sendStatus(200);
        } else {
          res.sendStatus(500);
        }
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
