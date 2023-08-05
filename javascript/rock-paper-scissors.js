// Introduction of the program to the player and definition of variables
let playerChoice = null
let computerChoice = null
let maxRounds = 5;


// Get user input after clicking on respective button

// Add a unique identifier to each button on click

// For each button modify choice display to show text of their own child p

const playerButtons = document.querySelectorAll('.player-choice-container .options-item')

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoiceDisplay = document.querySelector('.player-choice-container .choice-display');
        playerChoiceDisplay.textContent = button.firstChild.textContent;
        playerChoice = button.firstChild.textContent;
    })
});

// Generate random number between 1 and 3 and convert number to a choice
function getComputerChoice() {
    let min = Math.ceil(1)
    let max = Math.floor(3);
    let randomNumber = Math.floor(Math.random() * (max- min + 1) + min);

    switch(randomNumber) {
        case 1:
            return computerChoice = "rock";
            break;
        case 2:
            return computerChoice = "paper";
            break;
        case 3:
            return computerChoice = "scissors";
            break;
    }
}

// Based on previous function compare randomly generated choice to player's input and determine and outcome
function playRound(playerChoice, computerChoice) {
    let result = "null"

    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        return result = "win"
    } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
        return result = "lose"
    } else {
        return result = "tie"
    }
}

function playGame() {

    // Loop that plays the game for the specified number of rounds (maxRounds)
    for (let i = 1; i <= maxRounds ; i++) {
        let result = null

        verifyPlayerChoice()

        // Based on previous function call break the loop if the player's input is invalid
        if (playerChoice == "invalid") {
            alert("Please enter a valid choice!")
            break;
        } else {
            getComputerChoice()
            result = playRound(playerChoice, computerChoice)

            // console.log output according to the project requirements, here I used string methods to capitalize the output as it appears on The Odin Project's Rock Paper Scissors assignment step 4
            if (result == "win") {
                console.log("You Win! " + (playerChoice.substr(0,1)).toUpperCase() + playerChoice.substr(1) + " beats " + (computerChoice.substr(0,1)).toUpperCase() + computerChoice.substr(1))
            } else if (result == "lose") {
                console.log("You Lose! " + (computerChoice.substr(0,1)).toUpperCase() + computerChoice.substr(1) + " beats " + (playerChoice.substr(0,1)).toUpperCase() + playerChoice.substr(1))
            } else {
                console.log("It's a tie!")
            }

            if (i < maxRounds) {
                playerChoice = prompt()
            }
        }
    }
}