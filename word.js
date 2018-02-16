
//creating Word constructor with a chosen word variable, and array of words to use
function Word() {
	this.word = "";
	this.wordBankArr = ["giants", "patriots", "eagles", "jets", "seahawks", "cowboys", "redskins", "titans"];
}

//method used to select a random word from the word bank array and pushing it to the chosen word variable
Word.prototype.selectRandomWord = function() {
	this.word = this.wordBankArr[Math.floor(Math.random() * this.wordBankArr.length)];
};

module.exports = Word;

