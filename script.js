function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let number = randomIntFromInterval(1, 3);
    switch (number) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
        default:
            break;
    }
}

function capitaliseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let uiPlayerSelection = capitaliseFirstLetter(playerSelection);
    if (playerSelection === 'rock' && computerSelection === 'Scissors'
        || playerSelection === 'paper' && computerSelection === 'Rock'
        || playerSelection === 'scissors' && computerSelection === 'Paper') {
        // What if the player wins?
        return `You Win! ${uiPlayerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'Paper'
        || playerSelection === 'paper' && computerSelection === 'Scissors'
        || playerSelection === 'scissors' && computerSelection === 'Rock') {
        // What if the computer wins?
        return `You Lose! ${computerSelection} beats ${uiPlayerSelection}`;
    } else {
        return `Draw! ${uiPlayerSelection} and ${computerSelection}`
    }

}

function userInput() {
    let userChoice = ' ';
    while (
        userChoice.toLowerCase() != 'rock' &&
        userChoice.toLowerCase() != 'paper' &&
        userChoice.toLowerCase() != 'scissors') {
        userChoice = prompt("Enter Rock, Paper, Scissors!")
    }

    return userChoice;
}

function game() {
    let pointsPC = 0;
    let pointsPlayer = 0;

    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        let currentRound = playRound(userInput(), computerPlay());
        if (currentRound.toLowerCase().includes('draw')) {
            console.log(currentRound);
        } else if (currentRound.toLowerCase().includes('lose')) {
            console.log(currentRound);
            pointsPC++;
        } else if (currentRound.toLowerCase().includes('win')) {
            console.log(currentRound);
            pointsPlayer++;
        }

        console.log(`You now have ${pointsPlayer} points!\nThe NPC has ${pointsPC} points`);
    }

    if (pointsPC > pointsPlayer) {
        console.log("You lost!");
    } else if (pointsPlayer > pointsPC) {
        console.log("You won!");
    } else {
        console.log("Draw!");
    }
}

game()