  var num = 0;
$('#btn_caminhada').click(function(){
  if (num == 0) {
  $('#des_caminhada_ativo').removeClass('noneview');
  $('#des_caminhada_desativo').addClass('noneview');
  $("#btn_caminhada").text('Desistir');
  $("#btn_caminhada").removeClass('ativar');
  $('#btn_caminhada').addClass('desativar');
  num++;
  }
  else{
    $('#des_caminhada_ativo').addClass('noneview');
    $('#des_caminhada_desativo').removeClass('noneview');
    $("#btn_caminhada").text('Aceitar');
    $("#btn_caminhada").addClass('ativar');
    $('#btn_caminhada').removeClass('desativar');
    num--;
  }
});
