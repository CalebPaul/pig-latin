function translator(phrase) {
  if("AEIOUaeiou".includes(phrase[0])){
    phrase+="ay";
  }
  return phrase;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").text(translator($("#phrase").val()));


  });
});
