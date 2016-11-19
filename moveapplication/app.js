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
  nick: "fa",
  pwd: "fa",
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
  futebolvalor: 1,
  friends: []
};

var debugUser1 = {
  name: "Demo",
  last: "Andrade",
  age: 12,
  email: "demo@gmail.com",
  nick: "demo",
  pwd: "demo123",
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
  futebolvalor: 20,
  friends: []
};
var debugUser2 = {
  name: "Vinicius",
  last: "Peixoto",
  age: 6,
  email: "vini@gmail.com",
  nick: "vini",
  pwd: "vini123",
  sport: "tenis",
  sloth: "Bolinha",
  points: 50,
  level: 3,
  bambole: 1,
  basquete: 1,
  caminhada: 2,
  corrida: 1,
  futebol: 1,
  pular:2,
  s1: 1,
  s2: 1,
  s3: 2,
  s4: 1,
  s5: 1,
  s6: 2,
  s7: 1,
  s8: 1,
  corridavalor: 1,
  caminhadavalor: 14,
  bambolevalor: 1,
  pularvalor: 35,
  basquetevalor: 1,
  futebolvalor: 1,
  friends: []
};

var debugUser3 = {
  name: "Karen",
  last: "Cesar",
  age: 12,
  email: "karen@gmail.com",
  nick: "Ka",
  pwd: "ka123",
  sport: "volei",
  sloth: "Hanna",
  points: 34,
  level: 2,
  bambole: 1,
  basquete: 2,
  caminhada: 1,
  corrida: 2,
  futebol: 2,
  pular:1,
  s1: 1,
  s2: 1,
  s3: 1,
  s4: 1,
  s5: 1,
  s6: 2,
  s7: 1,
  s8: 1,
  corridavalor: 30,
  caminhadavalor: 1,
  bambolevalor: 1,
  pularvalor: 1,
  basquetevalor: 30,
  futebolvalor: 38,
  friends: []
};

users.insert(debugUser);
users.insert(debugUser1);
users.insert(debugUser2);
users.insert(debugUser3);

var pais = db.addCollection('pais');
var paisuser1 = {
  namepai: "fff",
  lastpai: "fff",
  emailpai: "fff",
  pwdpai: "fff"
};

pais.insert(paisuser1);

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

router.route('/pais')
  .get(function(req, res){

    //

  }).post(function(req, res){
    pais.insert(req.body);
    console.log('Pai/adm cadastrado com sucesso!');
    res.json('');
  });


router.route('/loginpai')
  .get(function(req, res){
      //res.json(db);
  })
  .post(function(req, res) {

    var findResults = pais.find({emailpai: req.body.emailpai, pwdpai: req.body.pwdpai});

    if(findResults[0].emailpai == req.body.emailpai && findResults[0].pwdpai == req.body.pwdpai){
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
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

	app.get('/searchFriends', function(request, response){

		var nick = request.query.nick;
		var user = users.find({'nick': { '$regex' : nick }});
		response.send(user);
	});

	app.post('/addFriend', function(request, response){
		var nick = request.body.nick;
		console.log(nick);
		var friend = request.body.friend;
		console.log(friend);
		var userUpdate = users.find({nick: nick});
		if(userUpdate)
		{
			console.log("list "+userUpdate[0].friends);
			userUpdate[0].friends.push(friend);
			users.update(userUpdate);
		}

		var userUpdate2 = users.find({nick: nick});
		if(userUpdate2)
		{
			console.log("valor atualizado: "+userUpdate[0].friends);
		}
		response.send();
	});

	app.get('/TesteUpdate', function(request, response) {

		var nick = request.query.nick;
		var desafio = request.query.desafio;
		var ativar = request.query.ativar;
		var userUpdate = users.find({nick: nick});

		if(userUpdate)
		{
			console.log("valor anterior: "+userUpdate[0][desafio]);
			console.log(ativar);
			if(ativar == 'true'){
				userUpdate[0][desafio] = 2;
			}
			else
			{
				userUpdate[0][desafio] = 1;
			}

			console.log(userUpdate[0][desafio]);
			users.update(userUpdate);
		}

		var userUpdate2 = users.find({nick: nick});
		if(userUpdate2)
		{
			console.log("valor atualizado: "+userUpdate[0][desafio]);
		}
		response.send();

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
