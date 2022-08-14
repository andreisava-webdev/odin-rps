function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choice[randomIndex];
}

console.log(getComputerChoice());
