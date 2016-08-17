$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").text($("#phrase").val());
  });
});
