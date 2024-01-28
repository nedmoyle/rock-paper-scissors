let totalComputerPoints = 0;
let totalPlayerPoints = 0;
let gameNumber = 1;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 30) + 1;

    if (randomNumber <= 10) {
        return "rock";
    } else if (randomNumber >20) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionLowercase = playerSelection.toLowerCase();
    if (playerSelectionLowercase == "rock" && computerSelection == "paper") {
        return -1;
    } else if (playerSelectionLowercase == "paper" && computerSelection == "rock") {
        return 1;
    } else if (playerSelectionLowercase == "scissors" && computerSelection == "rock") {
        return -1;
    } else if (playerSelectionLowercase == "rock" && computerSelection == "scissors") {
        return 1;
    } else if (playerSelectionLowercase == "paper" && computerSelection == "scissors") {
        return -1;
    } else if (playerSelectionLowercase == "scissors" && computerSelection == "paper") {
        return 1;
    } else if (playerSelectionLowercase == computerSelection) {
        return 0;
    }
}

const selectionContent = document.createElement('div');
selectionContent.classList.add('selectionContent');

const roundContent = document.createElement('div');
roundContent.classList.add('roundContent');

const winnerContent = document.createElement('div');
winnerContent.classList.add('winnerContent');

const scoreContent = document.createElement('div');
scoreContent.classList.add('scoreContent');

function game(playerSelection) {

    
    let computerSelection = getComputerChoice();

    selectionContent.textContent = 'You chose: ' + playerSelection + ', Computer chooses: ' + computerSelection;
    container.appendChild(selectionContent);
    
    let thisRound = playRound(playerSelection, computerSelection);

    if (thisRound == 1) {
        roundContent.textContent = playerSelection + ' beats ' + computerSelection;
        totalPlayerPoints++;
    } else if (thisRound == -1) {
        roundContent.textContent = computerSelection + ' beats ' + playerSelection;
        totalComputerPoints++;
    } else if (thisRound ==0) {
        roundContent.textContent = 'This round was a draw';
    }

    container.appendChild(roundContent);

    scoreContent.textContent = 'Score: Computer = ' + totalComputerPoints + ' Player = ' + totalPlayerPoints;
    container.appendChild(scoreContent);


    if (totalComputerPoints == 5) {
        winnerContent.textContent = 'Computer wins!!';
        
    }
    
    if (totalPlayerPoints == 5) {
        winnerContent.textContent = 'You win!!'
    }

    container.appendChild(winnerContent);

}

const container = document.querySelector('#container');

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', function() {game("rock")});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', function() {game("paper")});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', function() {game("scissors")});


