//your code here
const playButton = document.querySelector("#play-game");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const computerChoiceDisplay = document.querySelector("#computer-choose");
const roundResultDisplay = document.querySelector("#round-result");
const roundsLeftDisplay = document.querySelector("#rounds-left");
const userPointsDisplay = document.querySelector("#user-points");
const computerPointsDisplay = document.querySelector("#computer-points");
const gameResultDisplay = document.querySelector("#game-result");

const choices = ["ROCK", "PAPER", "SCISSORS"];
let roundsLeft;
let userPoints = 0;
let computerPoints = 0;

playButton.addEventListener("click", startGame);
rockButton.addEventListener("click", playRound.bind(null, "ROCK"));
paperButton.addEventListener("click", playRound.bind(null, "PAPER"));
scissorsButton.addEventListener("click", playRound.bind(null, "SCISSORS"));

function startGame() {
  roundsLeft = Number(document.querySelector("#game-number").value);
  updateRoundDisplay();
  playRound();
}

function playRound(userChoice) {
  if (!roundsLeft) {
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  computerChoiceDisplay.textContent = computerChoice;

  if (userChoice === computerChoice) {
    roundResultDisplay.textContent = "TIE";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    roundResultDisplay.textContent = "WON
