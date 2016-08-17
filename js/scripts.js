function translator(phrase) {
  for(var i=0; i<phrase.length; i++) {
    if (!"AEIOUaeiou".includes(phrase[0])) {
      if (((phrase.substr(0,1)==="q")||("Q"===phrase.substr(0,1)))&&
          ((phrase.substr(1,1)==="u")||("U"===phrase.substr(1,1)))) {
          phrase = phrase.substr(2) + phrase.substr(0,2);
      } else {
        phrase = phrase.substr(1) + phrase.substr(0,1);
      }
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
