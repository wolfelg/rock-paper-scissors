function computerPlay() {
    const choose = ["Rock", "Paper", "Scissors"];
    const chooseAnswer = choose[Math.floor(Math.random() * choose.length)];
    return chooseAnswer;
}

 // function userPlay() {}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'scissors') {
            return 'Player Wins!';
        } else {
            return 'Computer Wins!';
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Computer Wins!';
        } else {
            return 'Player Wins!';
        }
    }
    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Computer Wins!';
        } else {
            return 'Player Wins!';
        }
    }
}

function game() {
    for (let i = 1; i < 5; i++) {
        playRound();
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors, enter your choice: ");
let computerSelection = computerPlay();
let result = playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);
console.log(result);



