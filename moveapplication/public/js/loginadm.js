$('#loginadm').click(function(){

  var epl = $('#emailPaiLogin').val();
  var ppl = $('#pwdPaiLogin').val();

  var pai = {emailpai: epl, pwdpai: ppl};

  $.post( "/move/loginpai", pai)
    .done(function(){

      alert('Success');

      //$('body').removeClass('bgblue');
      //$('#myMainDiv').load('minha_area.html');
    })
    .fail(function(){

      alert('Fail');

      //$('#errologin').openModal();
    });

  // $('#myMainDiv').empty();
  // $('#myMainDiv').load('register.html');
});
