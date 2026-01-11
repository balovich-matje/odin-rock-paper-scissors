let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerChoice;

    if (randomNumber <= 33) {
        computerChoice = "Rock";
    } else if (randomNumber <= 67) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let result;
    humanChoicePara.textContent = `Human chose: ${humanChoice}`
    computerChoicePara.textContent = `Computer chose: ${computerChoice}`

    if (humanChoice === computerChoice) {
        result = "Nobody! A tie!";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        result = `Human! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `Computer! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    roundResultPara.textContent = `Round won by: ${result}`;
    humanScorePara.textContent = `Human score: ${humanScore}`;
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    if (humanScore == 5) {
        alert("Human won the game!");
        scoreReset();
    }
    else if (computerScore == 5) {
        alert("Computer won the game!");
        scoreReset();
    }
}

function scoreReset() {
    humanScore = 0;
    computerScore = 0;
    humanScorePara.textContent = `Human score: ${humanScore}`;
    computerScorePara.textContent = `Computer score: ${computerScore}`
    humanChoicePara.textContent = `Human chose: `;
    computerChoicePara.textContent = `Computer chose: `
    roundResultPara.textContent = `Round won by: `
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const humanChoicePara = document.querySelector(".human-choice-display");
const computerChoicePara = document.querySelector(".computer-choice-display")
const roundResultPara = document.querySelector(".round-result");

const humanScorePara = document.querySelector(".human-score-track");
const computerScorePara = document.querySelector(".computer-score-track");


rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

