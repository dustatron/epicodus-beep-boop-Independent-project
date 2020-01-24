$(document).ready(function(){
  var returnedNumbers = [];
  var userInput = 50;

  for (let i = 0; i <= userInput; i++) {
    var index = Array.from(i.toString());

    if (index.includes('3')) {
      returnedNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (index.includes('2'))  {
      returnedNumbers.push("Boop!");
    } else if (index.includes('1')) {
      returnedNumbers.push("Beep!");
    } else {
      returnedNumbers.push(i);

    }
  }


  console.log(returnedNumbers)
});