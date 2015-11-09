//Wait for the DOM elements to load before executing
$(document).ready(function() {

  // Create a function that runs whenever the submit button is clicked
  function swap_bkgd () {

    //Prevent the submit button from refreshing the page
    event.preventDefault();

    //Get the value that the user submitted
    var cityvalue = $('#city-type').val();

    //Correct user-submitted value for capitalization
    cityvalue = cityvalue.toLowerCase().trim();

    //If user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if(cityvalue == 'new york' || cityvalue == 'nyc' || cityvalue == 'new york city'){
      $('body').css('background-image','url(../class05_hw/images/nyc.jpg)');
    }

    //If user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    if(cityvalue == 'san franscisco' || cityvalue == 'sf' || cityvalue == 'bay area'){
      $('body').css('background-image','url(../class05_hw/images/sf.jpg)');
    }

    //If user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    if(cityvalue == 'los angeles' || cityvalue == 'la' || cityvalue == 'lax'){
      $('body').css('background-image','url(../class05_hw/images/la.jpg)');
    }

    //If user submits "Austin" or "ATX" make the background of the page austin.jpg
    if(cityvalue == 'austin' || cityvalue == 'atx'){
      $('body').css('background-image','url(../class05_hw/images/austin.jpg)');
    }

    //If user submits "Sydney" or "SYD" make the background of the page sydney.jpg
    if(cityvalue == 'sydney' || cityvalue == 'syd'){
      $('body').css('background-image','url(../class05_hw/images/sydney.jpg)');
    }


    //Need to figure out a better/less long way to write this:

    // else if(cityvalue != 'san franscisco' && cityvalue != 'sf' && cityvalue != 'los angeles') {
    //   $('body').css('background-image','url(../class05_hw/images/desert.jpg)');
    //   window.alert('Whoops! That city either doesn\'t exist, or it\'s too lame to include here. Try again with a city that actually matters.');
    // }


    //Need to figure out why background-size: cover doesn't seem to work



  }

$('#submit-btn').click(swap_bkgd);

});
