/*
    Introduction message to the user
    Get prompt from the user

    Make user's prompt lowercase
    Verify that user's prompt is valid


    Generate computer's choice
    Generate random number between 1 and 3

    Compare user's choice with the computer's choice
    Return the winner of the game

    Call previous function 5 times
*/

alert("This is rock paper scissors!")
alert("After this message, input your choice to be played against the computer!")
let playerChoice = prompt()
let computerChoice = null
let maxRounds = 5;


function verifyPlayerChoice() {
    playerChoice = playerChoice.toLowerCase()

    switch(playerChoice) {
        case "rock":
            return playerChoice;
            break;
        case "paper":
            return playerChoice;
            break;
        case "scissors":
           return playerChoice;
            break;
        default:
            return playerChoice = "invalid"
            break;
    }
}   

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
    for (let i = 1; i <= maxRounds ; i++) {
        let result = null

        verifyPlayerChoice()

        if (playerChoice == "invalid") {
            alert("Please enter a valid choice!")
            break;
        } else {
            getComputerChoice()
            result = playRound(playerChoice, computerChoice)

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

playGame()

