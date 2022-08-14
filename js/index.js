let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "Both players chose Rock, it's a tie!";
    } else if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats Rock!";
    } else {
      playerScore++;
      return "You win! Rock beats Scissors!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "Both players chose Paper, it's a tie!";
    } else {
      computerScore++;
      return "You lose! Scissors beats Paper!";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats Paper";
    } else {
      return "Both players chose Scissors, it's a tie!";
    }
  }

  return "Invalid input!";
}
