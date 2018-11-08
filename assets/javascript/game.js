// variable for ai letter
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// variables for text on page
var wins = 0;
var loss = 0;
var guessLeft = 9;
var guessFar = [];

// function for user choice
document.onkeyup = function(event) {
    var userInput = event.key;

    // generate ai guess
    var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // if statments for letter array.
    // NTS: don't put zeros in indexOf or it will break.
    if (options.indexOf(userInput) > -1) {

        // calculates wins
        if (userInput === psychicGuess) {
            wins++;
            guessLeft = 9;
            guessFar = [];
        }

    // not sure if I have to use else if here?
    // calculates guesses left
        if (userInput != psychicGuess) {
            guessLeft --;
            guessFar.push(userInput);
    }

    // calculates losses   
        if (guessLeft === 0) {

        guessLeft = 9;
        loss++;
        guessFar = [];

    }

    // puts text on the page
    var html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + loss + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your Guesses so far: " + guessFar.join(", ") + "</p>";

    // not sure exactly what this does?
    document.querySelector("#game").innerHTML = html;
    
    }
};
