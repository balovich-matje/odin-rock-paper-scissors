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

