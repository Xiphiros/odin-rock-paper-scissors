/*
    Introduction message to the user
    Get prompt from the user

    Make user's prompt lowercase
    Verify that user's prompt is valid


    Generate computer's choice

    Compare user's choice with the computer's choice
    Return the winner of the game

    Use the previous function to play 5 rounds of the game
*/

alert("This is rock paper scissors!")
alert("After this message, input your choice to be played against the computer!")
let playerChoice = prompt()

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

console.log(verifyPlayerChoice())
    

 
