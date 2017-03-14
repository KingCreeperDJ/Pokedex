$(document).ready(function(e){
  $.ajax({
    url: 'pokemons.json',
    dataType: "json" // -> soort data dat je terug verwacht
  }).done(function(data, textStatus, jqXHR){
    // Do stuff on success here
    for (var variable in data) {
      if (object.hasOwnProperty(variable)) {
        $(".test").append("<p>"+ data.variable + "</p>");
      }
    }

  }).fail(function(jqXHR, textStatus, errorThrown){
    // Do stuff on fail here

  });
});
