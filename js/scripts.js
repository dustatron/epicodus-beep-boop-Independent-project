$(document).ready(function(){
  var returnedNumbers = [];
  var userInput = 30;

  for (let i = 0; i <= userInput; i++) {
    var index = Array.from(i);
    if (i === 1){
      returnedNumbers.push("Beep!");
    } else if (i === 2)  {
      returnedNumbers.push("Boop!");
    } else if (i === 3) {
      returnedNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      returnedNumbers.push(i);
    }
  }


  console.log(returnedNumbers)
});