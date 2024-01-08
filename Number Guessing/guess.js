
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
    document.getElementById('message').textContent = message;
}
document.getElementById('check').addEventListener('click', function () {
    const guess = Number(document.getElementById("inputGuess").value);
    if (!guess) {
        displayMessage("No Number");
    }
    else if (guess === secretNumber) {
        displayMessage("Correct Number");
        document.getElementById("value").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.getElementById("highscore").textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? "Too High" :"Too Low");
          score -= 1;
          document.getElementById("score").textContent = score;
        } else {
          displayMessage("You Lost the game!");
          document.getElementById("score").textContent = 0;
        }
    }
})


document.getElementById("again").addEventListener('click', function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start Guessing...");
    document.getElementById("score").textContent = score;

    document.getElementById("value").textContent = "?";
    document.getElementById("inputGuess").value = '';

})








