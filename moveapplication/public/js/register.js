var count = 0;
$('#registerNext').click(function(){

  if(count==0) {
    $('#registerDiv1').hide();
    $('#registerDiv2').show();
    count++
  }

  if(count==1) {
    $('#registerDiv2').hide();
    $('#registerDiv3').show();
    count++
  }
  if(count==3) {

  }

});
