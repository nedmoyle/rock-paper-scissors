function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    console.log(randomNumber);
    if (randomNumber <= 10) {
        return "Rock";
    } else if (randomNumber >20) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());

