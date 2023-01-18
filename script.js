function getComputerChoice() {  // [COMPUTER INPUT]
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

function playerSelection() {    // [PLAYER INPUT]
    let input = prompt("Enter Rock, Paper or Scissors.");
    input = input.toLowerCase();
    return input;
}

function checkResult(playerInput, computerInput) {  // [CHECKS GAME RESULT]

    if (playerInput === computerInput) {
        return "The result is a draw!";
    }

    else if (playerInput === "rock") {
        if (computerInput === "paper") {
            return "You LOSE! (paper beats rock.)";
        }
        else {
            if(computerInput === "scissors") {
                return "You WIN! (rock beats scissors.)";
            }
        }
    }

    else if (playerInput === "paper") {
        if (computerInput === "rock") {
            return "You WIN! (paper beats rock.)";
        }
        else {
            if(computerSelection === "scissors") {
                return "You LOSE! (scissors beats paper.)";
            }
        } 
    }

    else if (playerInput === "scissors") {
        if (computerInput === "rock") {
            return "You LOSE! (rocks beats scissors.)"
        }
        else {
            if(computerInput === "paper") {
                return "You WIN! (scissors beats paper)";
            }
        }
    }

}

function playRound() {  // [PLAYS THE ROUND]
    const playerChoice = playerSelection();
    console.log(playerChoice);

    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    const winner = checkResult(playerChoice, computerChoice);
    console.log(winner);
}

function game() {   // [FIRST TO 5 GAME]
    for (let i = 0; i < 5; i++) {
        playRound();
     }
}

game();