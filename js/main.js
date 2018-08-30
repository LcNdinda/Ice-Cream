

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
});
