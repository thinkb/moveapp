
$(document).ready(function(){
   $('.collapsible').collapsible();
 });

 $('#sairadm').click(function(){
   $('#myMainDiv').empty();
   $('#myMainDiv').load('login_user.html');
   $('body').addClass('bgblue');
 });

 $('#progresso').click(function(){
   $('#main-intern-div').empty();
   $('#main-intern-div').load('progresso.html');
   $('body').addClass('bgblue');
 });
