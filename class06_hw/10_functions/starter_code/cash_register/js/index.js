var total = 0;

function currencyFormat(number) {
    // Turn the currency into a number

    // Set the correct decimal places
    //Force as number with 2 decimal places

    // Add the currency symbol

    // Return the value
}

function addvalue() {
    // Create our variables and populate them with values from the document elements
    var entryElement = document.getElementById('newEntry'),
        entriesElement = document.getElementById('entries'),
        totalElement = document.getElementById('total');


    var entry = entryElement.value;

    // Convert the entry from a string to a number

    // Format the number as currency

    // console.log(entry);

    // Get the html of the current entries and put it in a variable

    // Add the new entry to the variable

    // Replace the content of the entries document element with the updated variable

    // Update the total variable

    // Update the document element with the total

    // Empty the entry element
}



// Set total value to 0.
// Listen for a click.
document.getElementById('entryBtn').onclick = addvalue;