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
var wrongLetters = ""; // Defines empty string to display wrong letters


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
}

// Tried to use this to reset the game with a confirm dialog.  Didn't work.
	// var playAgain = confirm("Wanna Play Again");
		// if (playAgain) {
		// 	document.getElementById("#guesses").reset();
		// }


// Computer picks a random letter.  Moved up to function gameSetUp.
	// var computerPick = letterBank[Math.floor(Math.random()*letterBank.length)];

		// Checked if working in Console --- yes, computer is picking random letter.  Moved up to function gameSetUp,
		// console.log(computerPick);

// Register a user pick and Game Begins
	gameSetUp();
	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		 // Checked if working in Console --- yes, it is capturing key strokes
		console.log(userGuess);

		// Guessing Portion and Main Game Function
		if ((userGuess)===(computerPick)) {
			//Checked in Console --- yes, the alert is appearing if you pick the same letter and wins increase
			wins++;
			confirm("YOU WIN! Wanna Play Again?"); //How do I make this reset the computer pick, number of guesses, and Used Letter Bank?
			gameSetUp();
			// guesses=9;
			// computerPick = letterBank[Math.floor(Math.random()*letterBank.length)];
			// console.log(computerPick);
		} else {
			guesses--;
			wrongLetters=wrongLetters + userGuess +"  ";
			console.log("wrongLetters ", wrongLetters);  // Shows the string "wrongletters" + the userGuess
		} 

		if (guesses==0) {
			losses++;
			confirm("You Lose. Wanna Play Again");  // This does not work. The guesses continue into the negatives.  I'm so confused.
			gameSetUp();
		}
		

		// if (guesses===0) {
		// 	document.querySelector("#guesses").reset();
		// }  // This didn't work either.
	

		var html = "<h1>Guess What Letter I'm Thinking Of</h1>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses + "</p>" +
		"<p>Your Guesses So Far: " + wrongLetters + "</p>";


		document.querySelector("#game").innerHTML = html;
	}
		