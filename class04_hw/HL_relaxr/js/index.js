// on clicking .show-more
//   show .story1-full
//   hide .show-more
//   show .show-less
//
// on clicking .show-less
//   hide .story1-full
//   hide .show-less
//   show .show-more


jQuery(document).ready(function(){

// Prevent link from scrolling to the top of the page
  jQuery("a").click(function(event) {
    event.preventDefault();
  });


// Learn More
$( "#learn-more-link" ).click(function() {
  $("#learn-more-link").hide();
  $( "#learn-more-text" ).slideDown( "slow", function() {
  });
  $("#learn-less-link").show();
});

$( "#learn-less-link" ).click(function() {
  $("#learn-less-link").hide();
  $( "#learn-more-text" ).slideUp( "slow", function() {
  });
  $("#learn-more-link").show();
});

$("#learn-more-text").hide();
$("#learn-less-link").hide();

});
