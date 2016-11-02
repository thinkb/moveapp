var cook = 1;

$(document).ready(function(){
  if(cook == 1){
    $('#myMainDiv').load('tutorial.html');
    $('body').removeClass('bgblue');
    $('body').addClass('bgwrite');
  }
  else {
    if(cook == 2){
    $('#myMainDiv').load('login_user.html');
    }
  }
});
