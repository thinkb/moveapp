$('#btntutorial').click(function(){
  $('#myMainDiv').empty();
  $('#myMainDiv').load('login_user.html');
  $('body').removeClass('bgwrite');
  $('body').addClass('bgblue');
});
