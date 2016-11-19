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

    var nc = $("#name").val() == "";
    var lc = $("#last").val() == "";
    var ac = $("#age").val() == "";
    var ec = $("#email").val() == "";

    if(nc || lc || ac || ec ) {
      //nada
    } else {
      $("#registerNext").addClass('disabled');
      $('#registerDiv1').hide();
      $('#registerDiv2').show();
      $('#registerDiv3').hide();
      $('#step1').removeClass('wizard-on');
      $('#step2').removeClass('wizard-off');
      $('#step1').addClass('wizard-complete');
      $('#step2').addClass('wizard-on');
      formt++;

    }
  } else {

    if($('#registerDiv2').css('display') != 'none'){
      $("#registerNext").addClass('disabled');
      var nc = $("#nick").val() == "";
      var lc = $("#pwd").val() == "";
      var ac = $("#pwd2").val() == "";
      var ec = $("#sport").val() == "";

      if(nc || lc || ac || ec ) {
    $("#registerNext").addClass('disabled');
      } else {
        $('#registerDiv1').hide();
        $('#registerDiv2').hide();
        $('#registerDiv3').show();
        $("#registerNext").text('Fim!');
        $('#step2').removeClass('wizard-on');
        $('#step3').removeClass('wizard-off');
        $('#step2').addClass('wizard-complete');
        $('#step3').addClass('wizard-on');
        $("#registerNext").addClass('disabled');
      }
    } else {
      if ($('#registerDiv3').css('display') != 'none') {

        var nc = $("#sloth").val() == "";

        if(nc) {
          //nada
        } else {

          var u = {
            name: $('#name').val(),
            last: $('#last').val(),
            age: $('#age').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            pwd: $('#pwd').val(),
            sport: $('#sport').val(),
            sloth: $('#sloth').val(),
            points: 0,
            level: 1,
            bambole: 1,
            basquete: 1,
            caminhada: 1,
            corrida: 1,
            futebol: 1,
            pular: 1,
            s1: 1,
            s2: 1,
            s3: 1,
            s4: 1,
            s5: 1,
            s6: 1,
            s7: 1,
            s8: 1,
            corridavalor: 1,
            caminhadavalor: 1,
            bambolevalor: 1,
            pularvalor: 1,
            basquetevalor: 1,
            futebolvalor: 1,
            friends: []
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
  }
});


$('#loginapp').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('login_user.html');
});

var formt = 0;

if(formt == 0) {
  $("#registerNext").addClass('disabled');
  formt++;
}



$(document).ready(function(){
    $("#name").blur(function(){
     if($(this).val() == "")
         {
          $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
          $("#feedname").text("Pode nos dizer o seu nome?");
         }
     else{
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
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
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
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
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
       $("#feedage").empty();
     }
    });

    $("#email").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedemail").text("Por favor informe o seu e-mail");

         }
     else{
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
       $("#feedemail").empty();
       $("#registerNext").removeClass('disabled');
     }

    });


    $("#nick").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feednick").text("Escolha um apelido único.");

         }
     else{
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
       $("#feednick").empty();
     }

    });

    $("#pwd").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedpwd").text("Crie um senha forte.");

         }
     else{
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
       $("#feedpwd").empty();
     }

    });

    $("#pwd").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
             $("#feedpwd").text("Crie um senha forte.");

         }
     else{
       $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
       $("#feedpwd").empty();
     }
         });

     $("#pwd2").blur(function(){
      if($(this).val() == "")
          {
              $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
              $("#feedpwd2").text("Repita aqui a sua senha");

          }
      else{
        $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
        $("#feedpwd2").empty();
           $("#registerNext").removeClass('disabled');
      }
          });

      $("#sloth").blur(function(){
       if($(this).val() == "")
           {
               $(this).css({"border-color" : "#D80F44","color" : "#D80F44" });
               $("#feedsloth").text("Eii! Não esqueça do meu nome.");

           }
       else{
         $(this).css({"border-color" : "#C2D843","color" : "#2FAED1" });
         $("#feedsloth").empty();
          $("#registerNext").removeClass('disabled');
       }

    });




})
