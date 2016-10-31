var user;
var cook = 1;

$(document).ready(function(){
  if(cook == 1){
    $('#myMainDiv').load('tutorial.html');
    $('body').removeClass('bgblue');
    $('body').addClass('bgwrite');
  }
  else {
    if(cook == 2){
    $('#myMainDiv').load('login_user.html');
    }
  }
});


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
      $('body').removeClass('bgblue');
      $('#myMainDiv').load('minha_area.html');
    })
    .fail(function(){
      $('#errologin').openModal();
    });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
