/* Stores a number between 1-10, 
gives player one attempt to guess the number*/

// When the game begins the game is false
let correctGuess = false;
const number = 6; //Number to guess (inline comment)
const guess = prompt("Guess a number 1-10.");

/*
  1. Test if a player's gess matches the number.
  2. Changes the value of correctGuess to true if they match
*/
if (+guess === number) {
  correctGuess = true;
}

// Plus makes string into number

//Test if guess is correct nad output response
if (correctGuess) {
  console.log('You guessed the number.');
} else {
  console.log(`Sorry, the number was ${number}.`);
}

// if ( correctguess === true )
// is the same as above