/*
    Introduction message to the user
    Get prompt from the user

    Make user's prompt lowercase
    Verify that user's prompt is valid


    Generate computer's choice
    Generate random number between 1 and 3

    Compare user's choice with the computer's choice
    Return the winner of the game

    Use the previous function to play 5 rounds of the game
*/

alert("This is rock paper scissors!")
alert("After this message, input your choice to be played against the computer!")
let playerChoice = prompt()
let computerChoice = null


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
            return alert("Please enter a valid choice!");
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