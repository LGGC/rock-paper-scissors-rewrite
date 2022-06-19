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