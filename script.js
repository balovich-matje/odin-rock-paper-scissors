function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100) + 1;
    if (rand <= 33) {
        return "rock";
    }
    else if ((rand >= 34) && (rand <= 67)) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice() {
    let choice = prompt("Choose, Neo: rock, paper or scissors?");
    return choice;
}

function playRound(humanChoice, ComputerChoice) {
    if (humanChoice == ComputerChoice) {
        console.log("A tie!");
    }
    else if ((humanChoice == "rock") && (ComputerChoice == "scissors") || (humanChoice == "paper") && (ComputerChoice == "rock") || (humanChoice == "scissors") && (ComputerChoice == "paper")) {
        humanScore++;
        console.log("You win!" + humanChoice + " beats " + ComputerChoice);
    }
    else {
        computerScore++;
        console.log("You lose!" + ComputerChoice + " beats " + humanChoice);
    }
}

let humanScore = 0;
let computerScore = 0;
playRound(getHumanChoice(), getComputerChoice());

