function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    // console.log(randomNumber);
    if (randomNumber <= 10) {
        return "rock";
    } else if (randomNumber >20) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());

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

const playerSelection = prompt("What is your choice?");
console.log(playerSelection.toLowerCase());
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let totalPoints = 0;
    for (let i=1; i<6; i++){
        console.log("Game: " + i + ":");
        let computerSelection = getComputerChoice();
        console.log("Computer chooses: " + computerSelection);
        let thisRound = playRound(playerSelection, computerSelection);
        totalPoints = totalPoints + thisRound;

        if (thisRound == 1) {
            console.log(playerSelection + " beats " + computerSelection);
        } else if (thisRound == -1) {
            console.log(computerSelection + " beats " + playerSelection);
        } else if (thisRound ==0) {
            console.log("This round was a draw");
        }

        console.log(totalPoints);

    }
    if (totalPoints > 0) {
        return "You Win!";
    } else if (totalPoints < 0 ) {
        return "Computer Wins!";
    } else if (totalPoints == 0) {
        return "The game was a draw";
    }
}

console.log(game());

