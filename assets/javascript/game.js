// Computer picks a random letter from a letter bank.
// Player tries to guess the random letter.
// Capture the choices.
// Reduce the number of guesses left.
// Compare the choices to determine a match or no-match.
// If no-match, reduce the number of guesses left and add wrong guess to the wrong letter bank.
// Wins and Losses trigger increases on the scoreboard.
// Reset the game after a win or lose without a page refresh.

// VARIABLE ORDER MATTERS!!!!!!!!!! CANNOT CALL A VARIABLE IN A FUNCTION IF IT HAS NOT YET BEEN DECLARED!

// Letter Bank
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Wrong Letter Bank
var wrongLetters = ""; // Defines empty string to display wrong letters.
var badLetter = []; // Makes an empty array for the bad letters to be pushed to.
var badLetterTest; // The test to see if the user guess is already in the bad letter array.

var wins = 0;
var losses = 0;
var guesses = 9;
var computerPick = "";  //empty quotes to indicate a string value
console.log(computerPick);

// Use function gameSetUp so you don't have to repeat the individual variables inside the game loop.
function gameSetUp() {
	guesses = 9;
	computerPick = letterBank[Math.floor(Math.random()*letterBank.length)];
	console.log(computerPick);
	wrongLetters = "";
	badLetter = [];
}

// Tried to use this to reset the game with a confirm dialog.  Didn't work.
	// var playAgain = confirm("Wanna Play Again");
		// if (playAgain) {
		// 	document.getElementById("#guesses").reset();
		// }

		// Moved up to function gameSetUp.
		// Computer picks a random letter.
	// var computerPick = letterBank[Math.floor(Math.random()*letterBank.length)];

		// Moved up to function gameSetUp.
		// Checked if working in Console --- yes, computer is picking random letter.  ,
		// console.log(computerPick);

// Register a user pick and Game Begins
	gameSetUp();
	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		badLetterTest = badLetter.indexOf(userGuess);	// Gives a poistive or negative number

		console.log(userGuess);
		console.log(badLetterTest);

		// Guessing Portion and Main Game Function
		if ((userGuess) === (computerPick)) {
			//Checked in Console --- yes, the alert is appearing if you pick the same letter and wins increase
			wins++;
			confirm("YOU WIN! The computer picked '" + computerPick + "'. Wanna Play Again?"); 
			gameSetUp();
			// Had the below as standalone variables inside the 
			// guesses=9;
			// computerPick = letterBank[Math.floor(Math.random()*letterBank.length)];
			// console.log(computerPick);
		} 
		else if (badLetterTest == -1) {
			guesses--;
			wrongLetters = wrongLetters + userGuess +"  ";
			console.log("wrongLetters ", wrongLetters);  // Shows the string "wrongletters" + the userGuess
			badLetter.push(userGuess);
			console.log(badLetter);
		} 

		if (guesses == 1) {
			alert("You only have one guess left.");
		}

		if (guesses == 0) {
			losses++;
			confirm("You Lose. The computer picked '" + computerPick + "'. Wanna Play Again");
			gameSetUp();
		}
		


		var html = "<h1>Can You Guess What Letter I'm Thinking Of?</h1>" +
		"<hr>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses + "</p>" +
		"<p>Your Guesses So Far: " + wrongLetters + "</p>";


		document.querySelector("#game").innerHTML = html;
	}
		