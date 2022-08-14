let playerScore = 0;
let computerScore = 0;
let round = 0;

// Get the elements
const newGameBtn = document.querySelector(".new-game-btn");
const gameBtns = document.querySelectorAll(".game-btn");
const showGameButtons = document.querySelector(".game-buttons");
const showRound = document.querySelector(".show-round");
const showRoundWinner = document.querySelector(".show-round-winner");
const showGameWinner = document.querySelector(".show-game-winner");
const showPlayerScore = document.querySelector(".player-score__display");
const showComputerScore = document.querySelector(".computer-score__display");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choice[randomIndex];
}

function getRoundWinner(playerSelection, computerSelection) {
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

function playRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  const result = getRoundWinner(playerChoice, computerChoice);

  if (result === "player") {
    playerScore++;
    showRoundWinner.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You win this round!`;
  } else if (result === "computer") {
    computerScore++;
    showRoundWinner.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You lose this round!`;
  } else {
    showRoundWinner.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. This round is a tie!`;
  }

  showPlayerScore.textContent = playerScore;
  showComputerScore.textContent = computerScore;

  checkGameWinner();
}

function checkGameWinner() {
  if (playerScore === 5 || computerScore === 5) {
    gameBtns.forEach((btn) => {
      btn.disabled = true;
    });

    const winner = playerScore === 5 ? "Player" : "Computer";

    showGameWinner.textContent = `${winner} wins the game! Click on "New Game" to play again.`;
  } else {
    round++;
    showRound.textContent = `Round ${round}`;
  }
}

function startNewGame() {
  if (Window.confirm("Are you sure you want to start a new game?")) {
    showPlayerScore.textContent = 0;
    showComputerScore.textContent = 0;
    gameBtns.forEach((btn) => {
      btn.disabled = false;
    });
    round = 1;
    playerScore = 0;
    computerScore = 0;
    showRound.textContent = `Round ${round}`;
    showRoundWinner.textContent = "";
  } else {
    return;
  }
}

newGameBtn.addEventListener("click", startNewGame);

gameBtns.forEach((btn) => {
  btn.addEventListener("click", playRound);
});
