

function resetFields(){
  $("input#name").val("");
  $("textarea#comments").val("");

}

$(document).ready(function(){
  $("form#feedbacks").submit(function(event){
    event.preventDefault;
    var inputtedName = $("input#name").val();
    var inputComment = $("textarea#comments").val();

    resetFields();

  });
  $("li.footer1").click(function(){
    $("#footer").fadeIn(slow);
  })
});

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
