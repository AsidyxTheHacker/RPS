const choices = ["rock", "paper", "scissors"]
let userScore = 1;
let compScore = 1;
let playerChoice;
let computerChoice;
let result = document.getElementById('result');

function getComputerChoice() {  // [COMPUTER INPUT]
    let computer = Math.floor(Math.random() * choices.length) + 1;
    if (computer === 1){
        return "rock";
    } if (computer === 2){
        return "paper";
    } if (computer === 3){
        return "scissors";
    }
}

function checkResult(playerInput, computerInput) {  // [CHECKS GAME RESULT]
        if (
           (playerInput == "rock" && computerInput == "scissors") ||
           (playerInput == "paper" && computerInput == "rock") ||
           (playerInput == "scissors" && computerInput == "paper")
        )
         {  
            document.getElementById("score1").innerText = (userScore);
            userScore++;
            declareWinner()
            return "YOU WIN!";
         } else if (playerInput == computerInput) {
            return "DRAW!";
         } else { 
            document.getElementById("score2").innerText = (compScore);
            compScore++;
            declareWinner()
            return "COMPUTER WINS!";
         }
    }

const rock = document.getElementById("rockBtn");
    rock.addEventListener('click', function() {
        playerChoice = "rock";
        computerChoice = getComputerChoice();
        const winner = checkResult(playerChoice, computerChoice);
        document.getElementById("result").innerText = winner;
    })

const paper = document.getElementById("paperBtn");
    paper.addEventListener('click', function() {
        playerChoice = "paper";
        computerChoice = getComputerChoice();
        const winner = checkResult(playerChoice, computerChoice);
        document.getElementById("result").innerText = winner;
    })

const scissors = document.getElementById("scissorsBtn");
    scissors.addEventListener('click', function() {
        playerChoice = "scissors";
        computerChoice = getComputerChoice();
        const winner = checkResult(playerChoice, computerChoice);
        document.getElementById("result").innerText = winner;
    })

const reset = document.getElementById("resetBtn");
    reset.addEventListener('click', function() {
        location.reload();
    })

function declareWinner() {
    if (userScore === 6) {
        result.style.color = 'rgb(97, 165, 97)';
        result.style.animation = 'spin 5s linear infinite'
        document.getElementById('again').innerText = "Reset to play again";
        document.getElementById('rockBtn').disabled = true
        document.getElementById('paperBtn').disabled = true
        document.getElementById('scissorsBtn').disabled = true
    } else if (compScore === 6) {
        result.style.color = 'rgb(165, 97, 97)';
        result.style.animation = 'spin 5s linear infinite'
        document.getElementById('again').innerText = "Reset to play again";
        document.getElementById('rockBtn').disabled = true
        document.getElementById('paperBtn').disabled = true
        document.getElementById('scissorsBtn').disabled = true
    } 
}