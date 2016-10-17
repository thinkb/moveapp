$('#registerNext').click(function(){

  if($('#registerDiv1').css('display') != 'none') {
    $('#registerDiv1').hide();
    $('#registerDiv2').show();
    $('#registerDiv3').hide();
  } else {
    if($('#registerDiv2').css('display') != 'none'){
      $('#registerDiv1').hide();
      $('#registerDiv2').hide();
      $('#registerDiv3').show();
      $("#registerNext").text('Fim!');
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
        }, "json");

      }
    }
  }

});
