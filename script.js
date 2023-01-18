const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computer = Math.floor(Math.random() * getComputerChoice.length) + 1

    if (computer === 1){
        return "rock";
    }
    if (computer === 2){
        return "paper";
    }
    if (computer === 3){
        return "scissors";
    }
}

function playerSelection() {
    let input = prompt("Enter Rock, Paper or Scissors.");
    input = input.toLowerCase();
    return input;
}