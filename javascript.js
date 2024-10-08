function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    const choice = getRandomInt(1, 3);
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Your choice (rock, paper, scissors): ").toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        // Human wins
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("Human wins, rock beats scissors");
            ++humanScore;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("Human wins, paper beats rock");
            ++humanScore;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("Human wins, scissors beats paper");
            ++humanScore;
        }
        // Pc wins
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("Computer wins, scissors beats paper");
            ++humanScore;
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            console.log("Computer wins, paper beats rock");
            ++humanScore;
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("Computer wins, rock beats scissors");
            ++humanScore;
        }
        else {
            console.log("A tie");
        }
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }
}
playGame();