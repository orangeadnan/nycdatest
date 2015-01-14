var dictionary = [
	"apple",
	"banana",
	"pear",
	"orange"
];

// var dictionary;

// $.ajax({
// 	type: "GET",
// 	url: "http://api.wordfeuds.com/feed.php?q=a&position=0&lang=en&min=0&max=5",
// 	dataType: "jsonp"
// }).done(
// 	function(data) {
// 		dictionary = data;
// 		newGame();
// 	}
// );

var word;
var wordLetters;
var guessedLetters = [];
var remainingGuesses = 10;

function newGame()
{
	word = dictionary[parseInt(Math.random()*dictionary.length)].word;
	wordLetters = word.split('');
	guessedLetters = [];
	for(var i = 0; i < wordLetters.length; i++)
	{
		guessedLetters.push("_");
	}
	remainingGuesses = 10;

	updateHTML();
}

function updateHTML() {
	$(".blanks").html(guessedLetters.join(" "));
	$(".guesses_remaining").html(remainingGuesses);
}

function guessLetter(letterTheUserGuessed) {
	var letterFound = false;

	for(var i = 0; i < wordLetters.length; i++)
	{
		var letterToCheck = wordLetters[i];

		if(letterToCheck.toLowerCase() === letterTheUserGuessed.toLowerCase())
		{
			letterFound = true;
			guessedLetters[i] = letterToCheck.toLowerCase();
		}
	}

	console.log(guessedLetters);

	// If there are no blanks, you win
	if(guessedLetters.indexOf("_") === -1)
	{
		console.log("You win!");
		$(".message").html("You win!");
	}
	else if(remainingGuesses <= 0) {
		console.log("You lose.");
		$(".message").html("You lose.");
	}
	else if(letterFound)
	{
		console.log("Congrats! You found a letter!");
		$(".message").html("Congrats! You found a letter!");
		console.log("You have " + remainingGuesses + " guesses left.");
	}
	else
	{
		remainingGuesses--;
		$(".message").html("Incorrect.");
		console.log("You have " + remainingGuesses + " guesses left.");
	}

	updateHTML();
}


$(document).ready(function() {

	// When a letter button is clicked
	$('.letter_buttons button').click(function() {
		// Read the letter on the button
		var letter = $(this).html();
		// Guess that letter
		guessLetter(letter);

		$(this).attr("disabled", true);
	});

	$('#newgame').click(function() {
		$('.letter_buttons button').attr("disabled", false);
		newGame();
	});

	newGame();
});