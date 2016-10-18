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
