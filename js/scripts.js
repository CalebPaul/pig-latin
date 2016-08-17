function translator(phrase) {
  for(var i=0; i<phrase.length; i++) {
    if (!"AEIOUaeiou".includes(phrase[0])) {
      phrase = phrase.substr(1) + phrase.substr(0,1);
    } else {
      phrase+="ay";
      return phrase;
    }
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").text(translator($("#phrase").val()));


  });
});
