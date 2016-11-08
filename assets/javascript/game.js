// Our array of possible computer choices.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Variables for tracking our wins, losses and Guessesleft.
    var wins = 0;
    var losses = 0;
    var Guessesleft = 10;

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var YourGuesssofar = userGuess;
      
        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // If the user presses any letter, run the game logic.
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") ||
         (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
          (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
          (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
         (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || 
         (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || 
         (userGuess === "y") || (userGuess === "z")) {

            // This logic determines the outcome of the game (win/loss), and increments the appropriate counter.
            if (userGuess === computerGuess) {
                wins++;
                Guessesleft = 10;

            } else if (userGuess !== computerGuess) {
                Guessesleft--;
            }
            if (Guessesleft === 0) {
                losses++;
                Guessesleft = 10;
            }

            // Here we create the HTML that will be injected into our div and displayed on the page.
            var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" +
                "<p>Guesses left: " + Guessesleft + "</p>" +
                "<p>Your Guess so far: " + YourGuesssofar + "</p>";

            // Injecting the HTML we just created into our div and updating the game information on our page.
            document.querySelector("#game").innerHTML = html;

        }
    }