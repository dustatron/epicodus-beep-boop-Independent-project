$(document).ready(function(){
  var firstRun = true;
  $('#output').hide();
  
  function buildList(count, name) {
    var returnedNumbers = [];
    var userInput = count;
    var halString;

    //validate username exists. 
    if(name){
      halString = "I'm sorry, "+name+". I'm afraid I can't do that.";
    } else {
      halString = "I'm sorry, Dave. I'm afraid I can't do that."
    }
  
    for (let i = 0; i <= userInput; i++) {
      
      var index = Array.from(i.toString());

      if (index.includes('3')) {
        returnedNumbers.push(halString);
      } else if (index.includes('2'))  {
        returnedNumbers.push("Boop!");
      } else if (index.includes('1')) {
        returnedNumbers.push("Beep!");
      } else {
        returnedNumbers.push(i);
      }
    } // end for loop

    return returnedNumbers;
  } //end build list

  function printToDOM(array) {
    var front = "<div class='card output--box text-center'>";
    var back = "</div>"

    if(firstRun){
      // $('#output').addClass('bottom-border');
      array.forEach(item => $('#output').append(front+item+back));
      $('#output').slideDown(900);
      firstRun = false;
    } else {
      $('#output').slideUp( 500 ).promise().done(function(){
        $('#output').empty();
        array.forEach(item => $('#output').append(front+item+back));
        $('#output').slideDown( 500 );
      }); 
    }

  }

  $('form').submit(function(event){
    event.preventDefault();

    //get user number
    var userCount = $('#number-count').val();

    //get username
    var userName = $('#user-name').val();

    printToDOM(buildList(userCount, userName));
  });

});