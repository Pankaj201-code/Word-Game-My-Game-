
///Rules 
var rules = prompt("Rules:--👍👍" + "\n\n" +"1.Your word should contains maximum of 5 letters." + "\n" + "2.Your word should not be a name of any person." + "\n" + "3.The word you will write should be in uppercase." + "\n" +"4.To proceed further, write your name in the empty box." + "\n" + "5.Thank You!!!!" )


// Guess the word one letter at a time.
// Each player is only allowed to guess
// wrong three times.

// Prompt Player 1 to enter a word to guess and store
// as a variable.
var word = prompt("Player 1, Enter your secret word.");

//hint
var hint = prompt("Hint");

// Create another array to store good guesses
var secret = [];
// Create a variable to store the number of bad guesses
var strikes = 0;

// Fill this array with placeholders for guessing
for (i = 0; i < word.length; i++) {
  secret.push("_");
}

// Start a loop that continues as long as the person has
// not guessed wrong three times, or all of the letters have
// been guessed.
while (strikes < 3 && secret.indexOf("_") >= 0) {

  // Prompt Player 2 to guess a letter and store as
  // a variable.
  var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter." + "\n" +"Your hint is: "+ hint);

  // If the letter does not exist in the word,
  // add it to the bad guesses.
  if (word.indexOf(letter) < 0) {
    // add a strike
    strikes++;
    alert("Bad guess!, Try Again!😭😭😔😔");

  // If the letter exists in the word, we need to
  // add it to the good guesses array
  } else {
    for (i = 0; i < word.length; i++) {
      // Each time the guess letter is found, we
      // add it as a good guess in the same spot
      if (word[i] === letter) {
        secret[i] = letter;
      }
    }
  }
}

// Once the player has exited the loop, congratulate
// them on a win, or tell them they have lost and show
// the secret word.
if (strikes === 3) {
  alert("Sorry, please play again!😥😥");
} else {
  alert("Congratulations on your win!😀😎😎😀");
}
alert("The secret word was 👉👉" + word);
