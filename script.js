function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let number = randomIntFromInterval(1, 3);
    switch (number) {
        case 1:
            toggleAi('✊');
            return '✊'
        case 2:
            toggleAi('✋');
            return '✋'
        case 3:
            toggleAi('✌️');
            return '✌️'
        default:
            break;
    }
}

function toggleAi(pick) {
    const aiButtons = document.querySelectorAll('.ai');
    const aiOnButtons = document.querySelectorAll('.ai-on');
    aiButtons.forEach(button => {
        if (button.innerText == pick) {
            button.classList.add('ai-on');
            button.classList.remove('ai');
        }
    });

    aiOnButtons.forEach(button => {
        if (button.innerText != pick) {
            button.classList.remove('ai-on');
            button.classList.add('ai');
        }
    });
}


function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('.result');
    const descs = document.querySelector('.desc');
    const userScore = document.querySelector('.user.score');
    const aiScore = document.querySelector('.npc.score');
    const userPick = document.querySelector('.user.pick');
    const npcPick = document.querySelector('.npc.pick');

    userPick.textContent = playerSelection;
    npcPick.textContent = computerSelection;

    if (playerSelection === '✊' && computerSelection === '✌️'
        || playerSelection === '✋' && computerSelection === '✊'
        || playerSelection === '✌️' && computerSelection === '✋') {
        // What if the player wins?
        userScore.textContent = "Player: " + (parseInt(userScore.innerText.slice(-1)) + 1);
        results.textContent = "You Win!";
        descs.textContent = `${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === '✊' && computerSelection === '✋'
        || playerSelection === '✋' && computerSelection === '✌️'
        || playerSelection === '✌️' && computerSelection === '✊') {
        // What if the computer wins?
        results.textContent = "You Lose!";
        aiScore.textContent = "NPC: " + (parseInt(aiScore.innerText.slice(-1)) + 1);
        descs.textContent = `${computerSelection} beats ${playerSelection}`;
    } else {
        results.textContent = "Draw";
        descs.textContent = `${playerSelection} and ${computerSelection}`;
    }

}


const playButtons = document.querySelectorAll('.pickable');
playButtons.forEach(button => {
    button.addEventListener('click', () => playRound(button.innerText, computerPlay()));
});