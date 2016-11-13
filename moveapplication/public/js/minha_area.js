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

});
