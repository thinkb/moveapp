$('#backButton').click(function(){

  if($('#registerDiv1').css('display') != 'none') {
      $('#myMainDiv').empty();
      $('#myMainDiv').load('index.html');
  } else {
    if($('#registerDiv2').css('display') != 'none'){
      $('#registerDiv1').show();
      $('#registerDiv2').hide();
      $('#registerDiv3').hide();
      $('#step2').removeClass('wizard-on');
      $('#step1').removeClass('wizard-complete');
      $('#step2').addClass('wizard-off');
      $('#step1').addClass('wizard-on');
    } else {
      if ($('#registerDiv3').css('display') != 'none') {
        $('#registerDiv1').hide();
        $('#registerDiv2').show();
        $('#registerDiv3').hide();
        $("#registerNext").text('Próximo');
        $('#step3').removeClass('wizard-on');
        $('#step2').removeClass('wizard-complete');
        $('#step3').addClass('wizard-off');
        $('#step2').addClass('wizard-on');
      }
    }
  }
});

$('#registerNext').click(function(){

  if($('#registerDiv1').css('display') != 'none') {
    $('#registerDiv1').hide();
    $('#registerDiv2').show();
    $('#registerDiv3').hide();
    $('#step1').removeClass('wizard-on');
    $('#step2').removeClass('wizard-off');
    $('#step1').addClass('wizard-complete');
    $('#step2').addClass('wizard-on');
  } else {
    if($('#registerDiv2').css('display') != 'none'){
      $('#registerDiv1').hide();
      $('#registerDiv2').hide();
      $('#registerDiv3').show();
      $("#registerNext").text('Fim!');
      $('#step2').removeClass('wizard-on');
      $('#step3').removeClass('wizard-off');
      $('#step2').addClass('wizard-complete');
      $('#step3').addClass('wizard-on');
    } else {
      if ($('#registerDiv3').css('display') != 'none') {

        var user = {
          name: $('#name').val(),
          last: $('#last').val(),
          age: $('#age').val(),
          email: $('#email').val(),
          nick: $('#nick').val(),
          pwd: $('#pwd').val(),
          sport: $('#sport').val(),
          sloth: $('#sloth').val()

        };

        console.log(user);

        $.post( "/move/users", user, function( data ) {
          console.log( data );
          $('#myMainDiv').empty();
          $('#myMainDiv').load('minha_area.html');
          $('body').removeClass('paternpurple');
        }, "json");

      }
    }
  }

});
