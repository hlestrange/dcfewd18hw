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
  jQuery(".show-more").click(function(event) {
    event.preventDefault();
  });

// When clicking Read More show full story
  function toggleStory1() {
    jQuery('#story1-full').slideToggle();
    jQuery(".show-more").html("Show Less");
  }

  jQuery('#story1-full').hide();
  jQuery('.show-more').click(toggleStory1);


});




  // function question1(){
  //   $("p").css("color", "#14c2e6");
  // }
  //
	// $("#button1").click(question1);
