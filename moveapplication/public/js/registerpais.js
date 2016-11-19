$("#cadastropais").click(function(){

  var p = {
    name: $('#namepai').val(),
    last: $('#lastpai').val(),
    email: $('#emailpai').val(),
    pwd: $('#pwdpai').val()
  };

  $.post( "/move/pais", p, function( data ) {
    //$('#sucesso').openModal();

    alert('success!');

  }, "json");


})
