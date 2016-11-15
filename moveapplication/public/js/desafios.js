$.post( "/move/user", user, function(res){
    user = res;

  var num = 0;


//$('#teste').text(user.caminhada);

  var bambole = user.bambole;
  var basquete = user.basquete;
  var caminhada = user.caminhada;
  var corrida = user.corrida;
  var futebol = user.futebol;
  var pular = user.pular;

  var dadobam = user.bambolevalor;
  var dadobas= user.basquetevalor;
  var dadocam= user.caminhadavalor;
  var dadocor = user.corridavalor;
  var dadofut = user.futebolvalor;
  var dadopul = user.pularvalor;


if (pular == 1){
  $('#des_pular_ativo').addClass('noneview');
  $('#des_pularcorda_desativo').removeClass('noneview');
  $('#des_pular_desativo2').removeClass('noneview');
  $("#btn_pular").text('Aceitar');
  $("#btn_pular").addClass('ativar');
  $('#btn_pular').removeClass('desativar');
}
if (pular == 2){
  $('#des_pularcorda_desativo').addClass('noneview');
  $('#des_pular_desativo2').addClass('noneview');
  $('#des_pular_ativo').removeClass('noneview');
  $("#btn_pular").text('Desistir');
  $("#btn_pular").removeClass('ativar');
  $('#btn_pular').addClass('desativar');
}

if (bambole == 1){
  $('#des_bambole_ativo').addClass('noneview');
  $('#des_bambole_desativo').removeClass('noneview');
  $('#des_bambole_desativo2').removeClass('noneview');
  $("#btn_bambole").text('Aceitar');
  $("#btn_bambole").addClass('ativar');
  $('#btn_bambole').removeClass('desativar');
}
if (bambole == 2){
  $('#des_bambole_desativo').addClass('noneview');
  $('#des_bambole_desativo2').addClass('noneview');
  $('#des_bambole_ativo').removeClass('noneview');
  $("#btn_bambole").text('Desistir');
  $("#btn_bambole").removeClass('ativar');
  $('#btn_bambole').addClass('desativar');
}

if (caminhada == 1){
  $('#des_caminhada_ativo').addClass('noneview');
  $('#des_caminhada_desativo').removeClass('noneview');
  $('#des_caminhada_desativo2').removeClass('noneview');
  $("#btn_caminhada").text('Aceitar');
  $("#btn_caminhada").addClass('ativar');
  $('#btn_caminhada').removeClass('desativar');
}
if (caminhada == 2){
  $('#des_caminhada_desativo').addClass('noneview');
  $('#des_caminhada_desativo2').addClass('noneview');
  $('#des_caminhada_ativo').removeClass('noneview');
  $("#btn_caminhada").text('Desistir');
  $("#btn_caminhada").removeClass('ativar');
  $('#btn_caminhada').addClass('desativar');
}

if (basquete == 1){
  $('#des_basquete_ativo').addClass('noneview');
  $('#des_basquete_desativo').removeClass('noneview');
  $('#des_basquete_desativo2').removeClass('noneview');
  $("#btn_basquete").text('Aceitar');
  $("#btn_basquete").addClass('ativar');
  $('#btn_basquete').removeClass('desativar');
}
if (basquete == 2){
  $('#des_basquete_desativo').addClass('noneview');
  $('#des_basquete_desativo2').addClass('noneview');
  $('#des_basquete_ativo').removeClass('noneview');
  $("#btn_basquete").text('Desistir');
  $("#btn_basquete").removeClass('ativar');
  $('#btn_basquete').addClass('desativar');
}

if (corrida == 1){
  $('#des_corrida_ativo').addClass('noneview');
  $('#des_corrida_desativo').removeClass('noneview');
  $('#des_corrida_desativo2').removeClass('noneview');
  $("#btn_corrida").text('Aceitar');
  $("#btn_corrida").addClass('ativar');
  $('#btn_corrida').removeClass('desativar');
}
if (corrida == 2){
  $('#des_corrida_desativo').addClass('noneview');
  $('#des_corrida_desativo2').addClass('noneview');
  $('#des_corrida_ativo').removeClass('noneview');
  $("#btn_corrida").text('Desistir');
  $("#btn_corrida").removeClass('ativar');
  $('#btn_corrida').addClass('desativar');
}

if (futebol == 1){
  $('#des_futebol_ativo').addClass('noneview');
  $('#des_futebol_desativo').removeClass('noneview');
  $('#des_futebol_desativo2').removeClass('noneview');
  $("#btn_futebol").text('Aceitar');
  $("#btn_futebol").addClass('ativar');
  $('#btn_futebol').removeClass('desativar');
}
if (futebol == 2){
  $('#des_futebol_desativo').addClass('noneview');
  $('#des_futebol_desativo2').addClass('noneview');
  $('#des_futebol_ativo').removeClass('noneview');
  $("#btn_futebol").text('Desistir');
  $("#btn_futebol").removeClass('ativar');
  $('#btn_futebol').addClass('desativar');
}

});
