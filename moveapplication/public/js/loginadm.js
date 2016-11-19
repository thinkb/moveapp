$('#loginadm').click(function(){

  var epl = $('#emailPaiLogin').val();
  var ppl = $('#pwdPaiLogin').val();

  var pai = {emailpai: epl, pwdpai: ppl};

  $.post( "/move/loginpai", pai)
    .done(function(){
      $('#myMainDiv').empty();
      $('#myMainDiv').load('adm_area.html');
      $('body').removeClass('bgpurple');
      //$('body').removeClass('bgblue');
      //$('#myMainDiv').load('minha_area.html');
    })
    .fail(function(){

      $('#errologin').openModal();

      //$('#errologin').openModal();
    });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
