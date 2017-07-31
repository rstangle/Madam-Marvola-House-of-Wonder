// Computer picks a random letter from a letter bank.
// Player tries to guess the random letter.
// Capture the choices.
// Reduce the number of guesses left.
// Compare the choices to determine a match or no-match.
// If no-match, reduce the number of guesses left and add wrong guess to the wrong letter bank.
// Wins and Losses trigger increases on the scoreboard.
// Reset the game after a win or lose without a page refresh.


// Letter Bank
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
// var wrongLetters = blank array that gets filled in

// Computer picks a random letter
	var computerGuess = letterBank[Math.floor(Math.random()*letterBank.length)];
		// Checked if working in Console --- yes, computer is picking random letter
		console.log(computerGuess);

// Register a user pick
	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		// Checked if working in Console --- yes, it is capturing key strokes
		console.log(userGuess);

		if ((computerGuess)===(userGuess)) {
			//Checked in Console --- yes, the alert is appearing if you pick the same letter
			alert("YOU WIN!");
		}
	}
		