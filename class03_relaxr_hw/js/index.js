jQuery(document).ready(function(){

// Prevent link from scrolling to the top of the page----------
  jQuery(".toggle").click(function(event) {
    event.preventDefault();
  });


// Show More & Show Less Toggle -------------------------------
// function toggle-text() {
  $(".more-link").click(function() {
    $(".more-link").hide();
    $(".more-text").slideDown( "slow", function() {
    });
    $(".less-link").show();
  });

  $(".less-link").click(function() {
    $(".less-link").hide();
    $(".more-text").slideUp( "slow", function() {
    });
    $(".more-link").show();
  });
// }

$(".more-text").hide();
$(".less-link").hide();
// $(".more-link").click(toggle-text);

});
