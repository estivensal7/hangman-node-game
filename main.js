const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');

let guessesRemaining = 10; //guesses remaining for the user

let userWord = new Word();
userWord.selectRandomWord();

let letters = new Letter(userWord.word);
letters.displayBlankWord();

// console.log(letters.blankWord);
// console.log(letters);


function game() {
	console.log("Time to play NFL Teams Hangman!");
	if (guessesRemaining > 0) {
		inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				name: "guessLetter"
			}
		]).then(function(inquirerResponse) {
			letters.guessedLetters(inquirerResponse.guessLetter);

			let wordProgression = letters.wordProgression();

			if (userWord.word === wordProgression) {
				console.log("You got it!");
				return;
			} else {
				guessesRemaining--;
				console.log(`Remaining Guesses: ${guessesRemaining}`);
				game();
			}
		})
	} else {
		console.log(`Sacked! The team to guess was the ${userWord.word}. Better luck next time...`);
	};
};

game();