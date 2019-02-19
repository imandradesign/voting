$(document).ready(function(){
  $(".over-18").hide();
  $(".under-18").hide();

  $(".age-prompt form").submit(function(event){
    var ageInput = parseInt($("input#age").val());

    event.preventDefault();

    if (ageInput >= 18) {
      $(".over-18").show();
      $(".age-prompt").hide();
    } else {
      $(".under-18").show();
      $(".age-prompt").hide();
    }
  });
});
