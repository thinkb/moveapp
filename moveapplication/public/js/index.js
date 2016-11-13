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
  $('#cadastropais').empty();
  $('#cadastropais').load('callregisterpais.html');
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

  // validação

$(document).ready(function(){
    $("#nickLogin").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feednick").text("Ei! Não esqueça de colocar seu apelido.");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feednick").empty();
     }
    });

    $("#pwdLogin").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedsenha").text("Ops...você deve colocar a sua senha.");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedsenha").empty();
     }
    });


})
