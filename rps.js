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
        return "You Lose! Paper beats Rock";
    } else if (playerSelectionLowercase == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelectionLowercase == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelectionLowercase == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelectionLowercase == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beat paper";
    } else if (playerSelectionLowercase == computerSelection) {
        return "You Draw";
    } else return "Something went baddd"
}

const playerSelection = "rOck";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

