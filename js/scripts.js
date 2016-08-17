
function translator(phrase) {
  var phraseArray = phrase.split(" ");
  var newArray=phraseArray.map(translate);
  phrase = newArray.join(" ");
  return phrase;
}

function translate(word) {
  for(var i=0; i<word.length; i++) {
    if (!"AEIOUaeiou".includes(word[0])) {
      if (((word.substr(0,1)==="q")||("Q"===word.substr(0,1)))&&
          ((word.substr(1,1)==="u")||("U"===word.substr(1,1)))) {
          word = word.substr(2) + word.substr(0,2);
      } else {
        word = word.substr(1) + word.substr(0,1);
      }
    } else {
      word+="ay";
      return word;
    }
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").text(translator($("#phrase").val()));
  });
});
