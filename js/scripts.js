$(document).ready(function() {
  var firstRun = true; //create first run state for list animation.
  $("#output").hide(); //set hide to output box to avoid styles conflict with flex-box.

  // ---------- CREATE LIST ----------
  function buildList(count, name, reverse) {
    var returnedNumbes = [];
    var userInput = parseInt(count);
    var halString;

    //validate username exists.
    if (name) {
      halString = "I'm sorry, " + name + ". I'm afraid I can't do that.";
    } else {
      halString = "I'm sorry, Dave. I'm afraid I can't do that.";
    }

    // populate returnNames array.
    for (let i = 0; i <= userInput; i++) {
      var index = Array.from(i.toString());

      if (index.includes("3")) {
        returnedNumbes.push(halString);
      } else if (index.includes("2")) {
        returnedNumbes.push("Boop!");
      } else if (index.includes("1")) {
        returnedNumbes.push("Beep!");
      } else {
        returnedNumbes.push(i);
      }
    } // end for loop.

    //validate reverse button was checked.
    if (reverse === "reverse") {
      return returnedNumbes.reverse();
    } else {
      if (returnedNumbes.length > 1000) {
        return (returnedNumbes = [
          "That number is way to long. Just put in 999 and imagine the rest."
        ]);
      }
      return returnedNumbes;
    }
  } //end build list.

  // ---------- WRITE TO DOM ----------
  function printToDOM(array) {
    var front = "<div class='card output--box text-center'>";
    var back = "</div>";

    //create animation change based on state of 'firstRun'.
    if (firstRun) {
      array.forEach(item => $("#output").append(front + item + back));
      $("#output").slideDown(900);
      firstRun = false;
    } else {
      $("#output")
        .slideUp(500)
        .promise()
        .done(function() {
          $("#output").empty();
          array.forEach(item => $("#output").append(front + item + back));
          $("#output").slideDown(500);
        });
    }
  }

  // ---------- BUTTON ACTION ----------
  $("form").submit(function(event) {
    event.preventDefault();

    //get user number.
    var userCount = $("#number-count").val();

    //get username.
    var userName = $("#user-name").val();

    //get reverse checkbox.
    var reverse = $("input:checked").val();

    //validates the user input a number.
    if (isNaN(parseInt(userCount))) {
      printToDOM([
        "Please enter a valid number into the 'Number Range' input."
      ]);
    } else if (userCount.length < 4) {
      console.log(userCount.length);
      //end of logic
      printToDOM(buildList(userCount, userName, reverse));
    } else {
      printToDOM(["Your number was to large"]);
    }
  });
});
