// define answerArray in proper scope

var name = prompt("What's your name?");
console.log("Hello " + name);

// list of arrays
var words = ["trout", "bass", "tarpon", "bonefish"];

// pick a random word
var word = words[Math.floor(Math.random() * words.length)];

//set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

alert(answerArray.join(" "));

// Game loop

while (remainingLetters > 0) {
  //show player game progress
  alert(answerArray.join(" "));
  console.log("answerArray");

  // get guess from player
  var guess = prompt('Guess a letter, or click Cancel to stop playing."');
  if (guess === null) {
    // exit game
    break;
  } else if (guess.length !== 1) {
    alert("Please guess a single letter.");
  } else {
    //update game with guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] === guess;
        remainingLetters--;
      }
    }
  }
}

/*


HW:



While the word has not been guessed {
 Show the player their current progress
 Get a guess from the player
 If the player wants to quit the game {
 Quit the game
 }
 Else If the guess is not a single letter {
 Tell the player to pick a single letter
 }
 Else {
 If the guess is in the word {
 Update the player's progress with the guess
 }
 }
}

var






/* var hownWord = "_______"
var hiddenWord = "Hangman"
var shownWord = "_an____n"
var wins = 0
var losses = 0

function reserBoard {
    var shown
}

funtion handleUserGuess {

} */

/* alert("Press any key to get started");*/
