// variable for psychic letter
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var userInputElem = document.getElementById("userInput");
// var winsElem = document.getElementById("wins");
// var lossElem = document.getElementById("loss");
// var guessLeftElem = document.getElementById("guessLeft");
// var guessFarElem = document.getElementById("guessFar");

// variables for text on page
var wins = 0;
var loss = 0;
var guessLeft = 9;
var guessFar = [];

// function for user choice
document.onkeyup = function (e) {

    var userInput = e.key;

    var psychicGuess = psychicGuess[Math.floor(Math.random() * psychicChoices.length)];

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (letters.index0f(userInput) > -1)

        if (userInput === psychicGuess) {
            wins++;
            guessLeft = 9;
            guessFar = [];
    }

        else if (userInput != psychicGuess) {
            guessLeft --;
            guessFar.push(userInput);
        }


}


// userInputElem.textContent = userInputNum;
