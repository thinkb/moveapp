var user;

$('#beginRegister').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('register.html');
});

$('#loginButton').click(function(){

  var nickLogin = $('#nickLogin').val();
  var pwdLogin = $('#pwdLogin').val();

  user = {nick: nickLogin, pwd: pwdLogin};

  $.post( "/move/login", user)
    .done(function(){
      $('body').removeClass('paternpurple');
      $('#myMainDiv').load('minha_area.html');
    })
    .fail(function(){
      $('#errologin').openModal();
    });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
