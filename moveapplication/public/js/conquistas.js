$.post( "/move/user", user, function(res){
  user = res;

$('#con2').click(function(){
  $('#conq').empty();
  $('#conq').load('desafios_library/con1.html');
  $('#con2').addClass('active');
  $('#con3').removeClass('active');
});

$('#prox').click(function(){
  $('#conq').empty();
  $('#conq').load('desafios_library/con2.html');
  $('#con3').addClass('active');
  $('#con2').removeClass('active');
});

$('#ant').click(function(){
  $('#conq').empty();
  $('#conq').load('desafios_library/con1.html');
  $('#con2').addClass('active');
  $('#con3').removeClass('active');
});

$('#con3').click(function(){
  $('#conq').empty();
  $('#conq').load('desafios_library/con2.html');
  $('#con3').addClass('active');
  $('#con2').removeClass('active');
});


var stc1 = user.s1;
var stc2 = user.s2;
var stc3 = user.s3;
var stc4 = user.s4;
var stc5 = user.s5;
var stc6 = user.s6;
var stc7 = user.s7;
var stc8 = user.s8;

if (stc1 == 2) {
  $('#sbambole').removeClass('noneview');
  $('#sbamboleb').addClass('noneview');
  $('#sbambole2').removeClass('noneview');
  $('#sbamboleb2').addClass('noneview');
}

if (stc2 == 2) {
  $('#sfutebol').removeClass('noneview');
  $('#sfutebolb').addClass('noneview');
  $('#sfutebol2').removeClass('noneview');
  $('#sfutebolb2').addClass('noneview');
}

if (stc3 == 2) {
  $('#sapito').removeClass('noneview');
  $('#sapitob').addClass('noneview');
  $('#sapito2').removeClass('noneview');
  $('#sapitob2').addClass('noneview');
}

if (stc4 == 2) {
  $('#scaminha').removeClass('noneview');
  $('#scaminhab').addClass('noneview');
  $('#scaminha2').removeClass('noneview');
  $('#scaminhab2').addClass('noneview');
}

if (stc5 == 2) {
  $('#scorrida').removeClass('noneview');
  $('#scorridab').addClass('noneview');

}
if (stc6 == 2) {
  $('#slua').removeClass('noneview');
  $('#sluab').addClass('noneview');
}

if (stc7 == 2) {
  $('#scorda').removeClass('noneview');
  $('#scordab').addClass('noneview');
}

if (stc8 == 2) {
  $('#sbasquete').removeClass('noneview');
  $('#sbasqueteb').addClass('noneview');
}


});
