$('#beginRegister').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('register.html');
});

$('#loginButton').click(function(){

  var nickLogin = $('#nickLogin').val();
  var pwdLogin = $('#pwdLogin').val();

  var login = {nick: nickLogin, pwd: pwdLogin};

  $.post( "/move/login", login, function( res ) {
    if(res==0){
      alert("Usuário não cadastrado");
    } else {
      alert('Seguir para próxima página');
    }
  });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
