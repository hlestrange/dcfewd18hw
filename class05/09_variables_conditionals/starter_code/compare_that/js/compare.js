$('#submit').click(compare)

  function compare() {
    var a = $('#a').val();
    var b = $('#b').val();
    var comparison;

    //Changes the string to a number. It's a string because it's taken from the html
    a = parseInt(a);
    b = parseInt(b);

    //Compares numbers and defines the comparison variable
    if (a > b) {
      comparison = '>';
    }

    else if (a < b) {
      comparison = '<';
    }

    else if (a === b) {
      comparison = '=';
    }

    //Inserts the comparison variable into the html
    $('#comparison').html(comparison);
}
