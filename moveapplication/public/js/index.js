$('#beginRegister').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('register.html');
});

$('#loginButton').click(function(){

  var nickLogin = $('#nickLogin').val();
  var pwdLogin = $('#pwdLogin').val();

  var login = {nick: nickLogin, pwd: pwdLogin};

  $.post( "/move/login", login)
    .done(function(){
      alert('Done');
      $('body').removeClass('paternpurple');
      $('#myMainDiv').load('minha_area.html');
    })
    .fail(function(){
      alert("fail");
    });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
