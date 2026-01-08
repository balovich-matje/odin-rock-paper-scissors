function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100) + 1;
    if (rand <= 33) {
        return "Rock";
    }
    else if ((rand >= 34) && (rand <= 67)) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

function getHumanChoice() {
    let choice = prompt("Choose, Neo: rock, paper or scissors?");
    choice = choice.toLowerCase();
    choice = (choice.charAt(0)).toUpperCase() + choice.slice(1);
    return choice;

}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, ComputerChoice) {
        if (humanChoice == ComputerChoice) {
            console.log("A tie!");
        }
        else if ((humanChoice == "Rock") && (ComputerChoice == "Scissors") || (humanChoice == "Paper") && (ComputerChoice == "Rock") || (humanChoice == "Scissors") && (ComputerChoice == "Paper")) {
            console.log("You win! " + humanChoice + " beats " + ComputerChoice);
            humanScore++;
        }
        else {
            console.log("You lose! " + ComputerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Final score - Human: " + humanScore + ". Computer: " + computerScore);
    if (humanScore == computerScore) {
        console.log("Stalemate!");
    }
    else if (humanScore > computerScore) {
        console.log("Human wins!");
    }
    else {
        console.log("Computer wins!");
    }
}

playGame();


