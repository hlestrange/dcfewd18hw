jQuery(document).ready(function(){

// Prevent toggle links from scrolling to the top of the page----------
  jQuery('.toggle').click(function(event) {
    event.preventDefault();
  });


// Show More & Show Less Toggle -------------------------------
  $('.more-link').click(function() {
    var container = $(this).parent(); //'this' refers to the .more-link, 'parent' refers to the direct parent of the .more-link that was clicked
    $(this).hide();
    $('.more-text', container).slideDown( 'slow', function() {
      $('.less-link', container).show();});
  });

  $('.less-link').click(function() {
    var container = $(this).parent();
    $(this).hide();
    $('.more-text', container).slideUp( 'slow', function() {
    });
    $('.more-link', container).show();
  });

//Hide Read More and Read Less Links-------------------------------
$('.more-text').hide();
$('.less-link').hide();

});
