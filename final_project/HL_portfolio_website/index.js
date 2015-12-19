jQuery(document).ready(function(){

  $('#ViewMyWork').click(function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#MyWork').offset().top
    }, 1000);
  });

  $('#ViewBio').click(function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#bio').offset().top
    }, 1000);
  });

});
