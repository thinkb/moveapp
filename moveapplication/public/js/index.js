var user;
var keykey = 0 ;
$('#beginRegister').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('register.html');
});


$('#key').click(function(){
if (keykey == 0) {
  $('#logindiv').empty();
  $('#logindiv').load('login_pais.html');
  $('body').removeClass('bgblue');
  $('body').addClass('bgpurple');
  keykey++;
}
else {
  if (keykey == 1) {
    $('#myMainDiv').empty();
    $('#myMainDiv').load('login_user.html');
    $('body').addClass('bgblue');
    $('body').removeClass('bgpurple');
    keykey==0;
  }
}
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
