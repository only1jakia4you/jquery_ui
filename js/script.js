$( function() {
    $( "#draggable" ).draggable();
  } );

//droppable
$( function() {
    $( "#draggablee" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

//collapse
 $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

 //autocomplete
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  //datepicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  //slider
  $( function() {
    $( "#slider" ).slider();
  } );

  //tab
  $( function() {
    $( "#tabs" ).tabs();
  } );

  //tooltips
  $( function() {
    $( document ).tooltip();
  } );