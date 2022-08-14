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
      return "tie";
    } else if (computerSelection === "paper") {
      return "computer";
    } else {
      return "player";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else if (computerSelection === "paper") {
      return "tie";
    } else {
      return "computer";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "computer";
    } else if (computerSelection === "paper") {
      return "player";
    } else {
      return "tie";
    }
  }

  return "Invalid input!";
}

function handleResult(result, playerChoice, computerChoice) {
  if (result === "player") {
    playerScore++;
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (result === "computer") {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (result === "tie") {
    console.log("This round is a tie!");
  } else {
    console.log(result);
  }
}

function showGameWinner() {
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("This game is a tie!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}!`);

    const playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    const result = playRound(playerChoice, computerChoice);
    handleResult(result, playerChoice, computerChoice);

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("");
  }

  showGameWinner();
}

game();
