const Letter = require("./letter.js");


function Word(value) {
	//defining value
	this.value = value;
	//creating letters array
	this.letters = [];
	//has the word been guessed?
	this.valueFound = false;

	
	// creating getLetters method
	this.getLetters = function() {
		//rendering letters through for loop of new word into "this.letters array"
		for(let i=0; i < this.value.length; i++) {
			let newLetter = new Letter(this.value[i]);
			this.letters.push(newLetter);
		}

	}
	console.log(this.letters);
}

let wordOne = new Word("hello");

wordOne.getLetters();
