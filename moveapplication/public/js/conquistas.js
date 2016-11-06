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
