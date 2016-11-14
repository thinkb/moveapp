$.post( "/move/user", user, function(res){
  user = res;

  $(document).ready(function(){
     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
     $('.modal-trigger').leanModal();
   });

   $('.button-collapse').sideNav({
         menuWidth: 300, // Default is 240
         edge: 'left', // Choose the horizontal origin
         closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       }
     );

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });


  $('#amigos-pag').click(function(){
    $('#main-intern-div').empty();
    $('#main-intern-div').load('amigos.html');
    $('#menuitem2').removeClass('menu-on');
    $('#menuitem3').removeClass('menu-on');
    $('#menuitem1').addClass('menu-on');
    $("#amigos-pag").html("<img id='iconmenu1' class='icon_toolbar center' src='css/assets/amigosicon_yellow.svg'> <p class='textmenu'>Amigos</p>");
    $("#desafios-pag").html("<img id='iconmenu2' class='icon_toolbar center' src='css/assets/desafioicon_blue.svg'> <p class='toolbar_text center'>Desafios</p>");
    $("#conquistas-pag").html("<img id='iconmenu3' class='icon_toolbar center' src='css/assets/conquistasicon_blue.svg'> <p class='toolbar_text center'>Conquistas</p>");
  });


  $('#desafios-pag').click(function(){
    $('#main-intern-div').empty();
    $('#main-intern-div').load('desafios.html');
    $('#menuitem1').removeClass('menu-on');
    $('#menuitem3').removeClass('menu-on');
    $('#menuitem2').addClass('menu-on');
    $("#desafios-pag").html("<img id='iconmenu2' class='icon_toolbar center' src='css/assets/desafioicon_yellow.svg'> <p class='textmenu'>Desafios</p>");
    $("#amigos-pag").html("<img id='iconmenu1' class='icon_toolbar center' src='css/assets/amigosicon_blue.svg'> <p class='toolbar_text center'>Amigos</p>");
    $("#conquistas-pag").html("<img id='iconmenu3' class='icon_toolbar center' src='css/assets/conquistasicon_blue.svg'> <p class='toolbar_text center'>Conquistas</p>");

  });

  $('#choosechalenge').click(function(){
    $('#main-intern-div').empty();
    $('#main-intern-div').load('desafios.html');
    $('#menuitem1').removeClass('menu-on');
    $('#menuitem3').removeClass('menu-on');
    $('#menuitem2').addClass('menu-on');
    $("#desafios-pag").html("<img id='iconmenu2' class='icon_toolbar center' src='css/assets/desafioicon_yellow.svg'> <p class='textmenu'>Desafios</p>");
    $("#amigos-pag").html("<img id='iconmenu1' class='icon_toolbar center' src='css/assets/amigosicon_blue.svg'> <p class='toolbar_text center'>Amigos</p>");
    $("#conquistas-pag").html("<img id='iconmenu3' class='icon_toolbar center' src='css/assets/conquistasicon_blue.svg'> <p class='toolbar_text center'>Conquistas</p>");

  });


  $('#conquistas-pag').click(function(){
    $('#main-intern-div').empty();
    $('#main-intern-div').load('conquistas.html');
    $('#menuitem1').removeClass('menu-on');
    $('#menuitem2').removeClass('menu-on');
    $('#menuitem3').addClass('menu-on');
    $("#conquistas-pag").html("<img id='iconmenu3' class='icon_toolbar center' src='css/assets/conquistasicon_yellow.svg'> <p class='textmenu'>Conquistas</p>");
    $("#amigos-pag").html("<img id='iconmenu1' class='icon_toolbar center' src='css/assets/amigosicon_blue.svg'> <p class='toolbar_text center'>Amigos</p>");
    $("#desafios-pag").html("<img id='iconmenu2' class='icon_toolbar center' src='css/assets/desafioicon_blue.svg'> <p class='toolbar_text center'>Desafios</p>");

  });

  $('#minhaarea_btn').click(function(){
    $('#main-intern-div').empty();
    $('#main-intern-div').load('desafios_library/des_corrida.html');
  });

  $('#logout_btn').click(function(){
    window.location.replace('index.html');
  });


  $('#circle').circleProgress({
    value: 0.75,
    size: 250,
    fill: {
    gradient: ["#f0ce17", "#ffa200"]
    }
  });

  $('#circle1').circleProgress({
    value: 0.75,
    size: 250,
    fill: {
      gradient: ["#f0ce17", "#ffa200"]
    }
  });

  //console.log(user);
  $('.user_name').text(user.name);
  $('#nivel').text(user.level);
  $('#pontos').text(user.points);
  $('#nivel2').text(user.level);
  $('#pontos2').text(user.points);

  var nivelbar = user.level;

  //niveluser
  if (nivelbar == -1){
      $('#dorminhoco').addClass('active-status');
      $( '#barlevel' ).css( 'width', '10%' );
      $('#barlevel').removeClass('greenv');
      $('#barlevel').removeClass('blue');
      $('#barlevel').addClass('pink');
  }

  if (nivelbar == 0){
      $('#preguica').addClass('active-status');
      $( '#barlevel' ).css( 'width', '24%' );
      $('#barlevel').removeClass('greenv');
      $('#barlevel').removeClass('blue');
      $('#barlevel').addClass('pink');
  }

  if (nivelbar == 1){
      $('#novato').addClass('active-status');
      $('#barlevel').removeClass('pink');
      $('#barlevel').removeClass('greenv');
      $('#barlevel').addClass('blue');
  }

  if (nivelbar == 2){
      $('#ativo').addClass('active-status');
      $( '#barlevel' ).css( 'width', '54%' );
      $('#barlevel').removeClass('pink');
      $('#barlevel').removeClass('greenv');
      $('#barlevel').addClass('blue');

  }

  if (nivelbar == 3){
      $('#atleta').addClass('active-status');
      $( '#barlevel' ).css( 'width', '70%' );
      $('#barlevel').removeClass('pink');
      $('#barlevel').removeClass('greenv');
      $('#barlevel').addClass('blue');
  }

  if (nivelbar == 4){
      $('#medalhista').addClass('active-status');
      $( '#barlevel' ).css( 'width', '84%' );
      $('#barlevel').removeClass('pink');
      $('#barlevel').removeClass('blue');
      $('#barlevel').addClass('greenv');
  }

  if (nivelbar == 5){
      $('#mestre').addClass('active-status');
      $( '#barlevel' ).css( 'width', '100%' );
      $('#barlevel').removeClass('pink');
      $('#barlevel').removeClass('blue');
      $('#barlevel').addClass('greenv');
  }

// logica desafios
var determinante = 0;


var bambolev = user.bambole;
var basquetev = user.basquete;
var caminhadav = user.caminhada;
var corridav = user.corrida;
var futebolv = user.futebol;
var pularv = user.pular;




$(document).ready(function(){

if (bambolev == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_bambole.html');
} else{

  if (corridav == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_corrida.html');
}
else{
  if (basquetev == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_basquete.html');
}

else{
  if (caminhadav == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_caminhada.html');
}

else{
  if (futebolv == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_futebol.html');
}

else{
  if (pularv == 2){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_pularcorda.html');
}

}}}}}});

$(document).ready(function(){
if (bambolev == 1){
  $('#bamboleview').hide();
}
if (bambolev == 2){
  $('#bamboleview').show();
}

if (basquetev == 1){
  $('#basqueteview').hide();
}
if (basquetev == 2){
  $('#basqueteview').show();
}

if (caminhadav == 1){
  $('#caminhadaview').hide();
}
if (caminhadav == 2){
  $('#caminhadaview').show();
}

if (futebolv == 1){
  $('#futebolview').hide();
}
if (futebolv == 2){
  $('#futebolview').show();
}

if (corridav == 1){
  $('#corridaview').hide();
}
if (corridav == 2){
  $('#corridaview').show();
}


if (pularv == 1){
  $('#pularview').hide();
}
if (pularv == 2){
  $('#pularview').show();
}

});

$('#corridaview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_corrida.html');
  $('#modal1').modal('close');

});

$('#pularview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_pularcorda.html');
  $('#modal1').modal('close');

});

$('#futebolview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_futebol.html');
  $('#modal1').modal('close');

});

$('#caminhadaview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_caminhada.html');
  $('#modal1').modal('close');

});

$('#basqueteview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_basquete.html');
  $('#modal1').modal('close');

});

$('#bamboleview').click(function(){
  $('#main-intern-div').empty();
  $('#main-intern-div').load('desafios_library/des_bambole.html');
  $('#modal1').modal('close');

});

});
