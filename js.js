// Setting colors array
let colors = ["magenta", "purple", "aqua", "blue", "coral", "gold", "green", "red", "teal", "tomato", "yellow"];
const gameResult = Math.floor(Math.random() * colors.length);
let guesses;

// Sort array items in alphabetic order
colors.sort();

// Function to send the colors array to colorDiv html id
function showColors() {
    // Get html id where the colors array will go
    const colorDiv = document.getElementById("colorDiv");
    // sent the colors array to the html item
    colorDiv.innerHTML = colors;
}

function analyzeAnswer() {
    const body = document.body;
    let GuessMessage = document.getElementById("guessMessage");
    guesses = 1;
    const textBox = document.getElementById("textbox").value;
    let playerAnswer = textBox.toLowerCase();
    playerAnswer = playerAnswer.replaceAll(' ', '');

    if (playerAnswer === colors[gameResult]) {
        alert("You win !");
        body.style.backgroundColor = colors[gameResult];
        GuessMessage.innerHTML = "It took " + guesses + " guesses to get the answer!";
    } else {
        GuessMessage.innerHTML = "Guesses done so far: " + guesses;
        guesses++;
    }
    console.log('Player Answer:' + playerAnswer);
    console.log('Game result:' + colors[gameResult]);

}

// Call the function to show the colors
window.onload = showColors;