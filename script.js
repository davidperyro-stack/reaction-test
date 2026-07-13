const message = document.getElementById("message");

let gameStarted = false;
let delay;
let timer;
let startTime;
let canReact = false;

document.addEventListener("keydown", function(event) {

    if (event.code !== "Space") {
        return;
    }

    if (gameStarted === false) {

        gameStarted = true;

        delay = Math.random() * 3000 + 2000;
        document.body.style.background = "linear-gradient(135deg, #000000, #1a0033)";
        message.textContent = "Wait...";

    timer = setTimeout(function() {
        message.textContent = "PRESS SPACE!";
        document.body.style.background = "#14532d";
        startTime = Date.now();
        canReact = true;
    }, delay);
    } else if (canReact === true) {

        let reactionTime = Date.now() - startTime;
        let reactionMessage = "";

        if (reactionTime < 200) {
            reactionMessage = "Congrats!"
        }
        else if (reactionTime <300) {
            reactionMessage = "Nice!";
        }
        else if (reactionTime < 400) {
            reactionMessage = "good!"
        }
        else {
            reactionMessage = "PLEASE FIX YOUR REACTION."
        }

        message.textContent = reactionMessage + "\n\nReaction Time: " + reactionTime + " ms";
        document.body.style.background = "linear-gradient(135deg, #000000, #210e33)";

        gameStarted = false;
        canReact = false;

    } else {
        clearTimeout(timer);

        message.textContent = "Too early :(";
        document.body.style.background = "#5a1010";
        gameStarted = false;
        canReact = false;

    }

});
