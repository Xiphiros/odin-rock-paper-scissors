//Initialize getHumanChoice() function
//  Initialize humanChoice variable and set to prompt user for choice;
//  Create switch statement for humanChoice
//      Case (to lowercase) rock:
//      Case (to lowercase) paper:
//      Case (to lowercase) scissors:
//          Return humanChoice
//      Case default:
//          Return error (since there are no matches)
//
//Initiallize getComputerChoice() function
//  Initialize computerChoice
//  Initialize randomNumber and set it to: Math.random * 3
//
//  
//  If randomNumber between 0 and 1
//      return computerChoice = rock
//  else if randomNumber between 1 and 2
//      return computerChoice = paper
//  else
//      return computerChoice = scissors
//
//Initialize playRound() function
//  Initialize humanChoice = getHumanChoice()
//  Initialize computerChoice = getComputerChoice()
//  
//  If case win (player = rock AND computer = scissors 
//              OR player = paper AND computer = rock
//              OR player = scissors AND computer = paper)
//      Log result (win)
//      Log user choice
//      Log computer choice
//      Add one to humanScore
//  Else case loss (player = rock AND computer = paper
//                  OR player = paper AND computer = scissors
//                  OR player = scissors AND computer = rock)
//      Log result (loss)
//      Log user choice
//      Log computer choice
//      Add one to humanScore
//  Else case draw
//      Log result (draw)
//      Log user choice
//      Log computer choice
//      Add one to humanScore
//
//Initialize playGame() function
//  Initialize roundNumbers variable to a prompt asking the user for number of rounds.
//  Initialize humanScore and set to 0;
//  Initialize computerScore and set to 0;
//  
//  For roundsPlayed less than roundNumbers
//      Call playRound()

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?", "").toLowerCase();

    console.log(humanChoice);

    switch(humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
            break;
        default:
            console.log("Invalid input! Please enter rock, paper or scissors");
            break;
    }
}

function getComputerChoice() {
    let randomNumber = Math.random() * 3;

    if (randomNumber < 1) {
        return "rock";
    } else if (randomNumber < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
            console.log("You win!");
            console.log("Your choice was: " + humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice (1));
            console.log("The computer's choice was: " + computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1))
            return "win"
        } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
            console.log("You lose!");
            console.log("Your choice was: " + humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice (1));
            console.log("The computer's choice was: " + computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1));
            return "loss"
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            console.log("Your choice was: " + humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice (1));
            console.log("The computer's choice was: " + computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1))
            return "tie"
        }
}

function playGame() {
    let roundNumbers = prompt("Enter the number of rounds: ", "5");
    let humanScore = 0;
    let computerScore = 0;
    let tiesCount = 0;

    for (let i = 0; i < roundNumbers; i++) {
        let result = playRound()

        switch(result) {
            case "win":
                humanScore++;
                break;
            case "loss":
                computerScore++;
                break;
            case "tie":
                tiesCount++;
                break;
        }
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log("Total ties: " + tiesCount);
}