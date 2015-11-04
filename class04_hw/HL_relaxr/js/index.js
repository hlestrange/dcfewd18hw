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
  jQuery(".toggle-story-1").click(function(event) {
    event.preventDefault();
  });


// Read More & Read Less

$(document).ready(function() {
    var showChar = 600;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Read Less";


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="show-more">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".show-more").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


});
