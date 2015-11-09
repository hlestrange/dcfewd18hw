//When clicking the light switch turn the background black

var lights = 'on';

function lightswitch() {
  if(lights == 'on') {
    $('body').addClass('dark');
    lights = 'off';
  } else {
    $('body').removeClass('dark');
    lights = 'on';
  }
}

$('#light_switch').click(lightswitch);
