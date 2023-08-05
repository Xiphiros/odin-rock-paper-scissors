// Introduction of the program to the player and definition of variables
let playerChoice = null
let computerChoice = null
let maxRounds = 5;

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
            return computerChoice = 'Rock';
            break;
        case 2:
            return computerChoice = 'Paper';
            break;
        case 3:
            return computerChoice = 'Scissors';
            break;
    }
}

// Based on previous function compare randomly generated choice to player's input and determine and outcome
function playRound(playerChoice, computerChoice) {
    let result = 'null'

    if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper') {
        return result = 'Win'
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock') {
        return result = 'Lose'
    } else {
        return result = 'Tie'
    }
}

function playGame() {
    const computerChoiceDisplay = document.querySelector('.computer-choice-container .choice-display');
    const resultDisplay = document.querySelector('.result-display');
    const playerScoreDisplay = document.querySelector('.player-score-display');
    const computerScoreDisplay = document.querySelector('.computer-score-display');


    if (playerChoice == null) {
        resultDisplay.textContent = 'ERROR'
        return 0;
    }

    computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);

    if (result == 'Win') {
        playerScoreDisplay.textContent = +playerScoreDisplay.textContent + 1;
    } else if (result == 'Lose') {
        computerScoreDisplay.textContent= +computerScoreDisplay.textContent + 1;
    } else {
        playerScoreDisplay.textContent = +playerScoreDisplay.textContent + 1;
        computerScoreDisplay.textContent= +computerScoreDisplay.textContent + 1;
    }

    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
}

const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', playGame)