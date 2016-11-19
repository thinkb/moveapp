$("#cadastropais").click(function(){

  var np = $('#namepai').val() == "";
  var lp = $('#lastpai').val() == "";
  var ep = $('#emailpai').val() == "";
  var pp = $('#pwdpai').val() == "";
  var p2p = $('#pwd2pai').val() == "";


  if(np || lp || ep || pp || p2p){
    //nada
  } else {

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

  }

});
