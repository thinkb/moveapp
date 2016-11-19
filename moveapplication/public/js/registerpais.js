$("#cadastropais").click(function(){

  var p = {
    namepai: $('#namepai').val(),
    lastpai: $('#lastpai').val(),
    emailpai: $('#emailpai').val(),
    pwdpai: $('#pwdpai').val()
  };

  $.post( "/move/pais", p, function( data ) {
    //$('#sucesso').openModal();

    alert('success!');

  }, "json");


})
