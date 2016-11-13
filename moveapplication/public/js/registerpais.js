$('#backButton').click(function(){

  if($('#registerDiv1').css('display') != 'none') {
      $('#myMainDiv').empty();
      $('#myMainDiv').load('login_user.html');
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

        var u = {
          name: $('#name').val(),
          last: $('#last').val(),
          age: $('#age').val(),
          email: $('#email').val(),
          nick: $('#nick').val(),
          pwd: $('#pwd').val(),
          sport: $('#sport').val(),
          sloth: $('#sloth').val()

        };

        $.post( "/move/register", u, function( data ) {
          $('#sucesso').openModal();

          //$('html').empty();
          //$('html').load('index.html');
          $('body').removeClass('paternpurple');
        }, "json");

      }
    }
  }

});

$('#loginapp').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('login_user.html');
});


    var sEmail	= $("#email").val();
		// filtros
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/


$(document).ready(function(){
    $("#name").blur(function(){
     if($(this).val() == "")
         {
          $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
          $("#feedname").text("Pode nos dizer o seu nome?");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedname").empty();
     }
    });

    $("#last").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedlast").text("Qual o seu sobrenome mesmo?");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedlast").empty();
     }
    });

    $("#age").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedage").text("Ops... Qual sua idade?");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedage").empty();
     }
    });

    $("#email").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedemail").text("Porfavor informe o seu e-mail");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedage").empty();
     }

     if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
       $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
       $("#feedemail").text("Insira um e-mail válido.");
		}
    else {
      $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
      $("#feedemail").empty();
		}


    });

    $("#email").blur(function(){
     if($(this).val() == "")
         {
           $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
           $("#feedemail").text("Por favor informe o seu e-mail");
         }
     else{
       $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
       $("#feedage").empty();
     }

     if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
       $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
       $("#feedemail").text("Insira um e-mail válido.");
    }
    else {
      $(this).css({"border-color" : "#2FAED1","color" : "#2FAED1" });
      $("#feedemail").empty();
    }


    });



})
