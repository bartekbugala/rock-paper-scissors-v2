'use strict'

let resultDiv = document.getElementById('result');
let roundsNumber = document.getElementById('rounds-number');

let btnRock = document.getElementById('button-rock');
let btnPaper = document.getElementById('button-paper');
let btnScissors = document.getElementById('button-scissors');

let outputDiv = document.getElementById('output');

let btnStart = document.getElementById('button-start');

let resultPlayer = 0;
let resultComputer = 0;
let roundsToWin = 0;
let gameOver = true;

let currentWinMsg = '';
let gameOverMsg = '';

function randomOf3() {
    return Math.floor((Math.random() * 3) + 1);
}

function playerMove(playerChoice) {
    if (!gameOver) {
        let resultMessage = checkWinner(playerChoice);
        updateLineMsg(outputDiv, resultMessage);
        updateResultMsg();
    }
    if (resultPlayer === roundsToWin) {
        gameOver = true;
        gameOverMsg = 'YOU WON THE ENTIRE GAME - GAME OVER';
        return addLineMsg(outputDiv, gameOverMsg);
    } if (resultComputer === roundsToWin) {
        gameOver = true;
        gameOverMsg = 'COMPUTER WON THE ENTIRE GAME - GAME OVER';
        return addLineMsg(outputDiv, gameOverMsg);
    }
    return;
}

function checkWinner(playerChoice) {
    let computerChoice = randomOf3();
    if (playerChoice === 1 && computerChoice === 2) {
        resultComputer++;
        return 'YOU LOST! you played ROCK, computer played PAPER';
    } else if (playerChoice === 2 && computerChoice === 1) {
        resultPlayer++;
        return 'YOU WON! you played PAPER, computer played ROCK';
    } else if (playerChoice === 3 && computerChoice === 1) {
        resultComputer++;
        return 'YOU LOST! you played SCISSORS, computer played ROCK';
    } else if (playerChoice === 1 && computerChoice === 3) {
        resultPlayer++;
        return 'YOU WON! You played ROCK, computer played SCISSORS';
    } else if (playerChoice === 3 && computerChoice === 2) {
        resultPlayer++;
        return 'YOU WON! You played SCISSORS, Computer played PAPER';
    } else if (playerChoice === 2 && computerChoice === 3) {
        resultComputer++;
        return 'YOU LOST! you played PAPER, computer played SCISSORS';
    } return 'DRAW';
}

function updateLineMsg(domElement, textToDisplay) {
    domElement.innerHTML = textToDisplay;
}

function addLineMsg(domElement, textToDisplay) {
    domElement.innerHTML = domElement.innerHTML + '<br><br>' + textToDisplay;
}

function updateResultMsg() {
    resultDiv.innerHTML = '<span>' + resultPlayer + '</span>' + ' - ' + '<span>' + resultComputer + '</span>';
}

function gameOverMessageOnButton() {
    let msg = "Game over, please press the new game button!";
    updateLineMsg(outputDiv, gameOverMsg +'<br><br>'+ msg );
}

btnStart.addEventListener('click', function () {
    // Prompt with validation
    roundsToWin = prompt('How many rounds to win?');
    if (roundsToWin === null) {
        return;
    }
    roundsToWin = parseInt(roundsToWin);
    if (isNaN(roundsToWin) || roundsToWin <= 0) {
        updateLineMsg(outputDiv, 'Wrong input, please enter a positive number.');
        return;
    }
    // Reset variables - Start game
    updateLineMsg(outputDiv, 'New game started');
    resultPlayer = 0;
    resultComputer = 0;
    gameOver = false;
    updateResultMsg();
    updateLineMsg(roundsNumber, roundsToWin);
});

// Figure Buttons
btnRock.addEventListener('click', function () {
    if (gameOver) {
        gameOverMessageOnButton()
        return;
    }
    playerMove(1);
});

btnPaper.addEventListener('click', function () {
    if (gameOver) {
        gameOverMessageOnButton()
        return;
    }
    playerMove(2);
});

btnScissors.addEventListener('click', function () {
    if (gameOver) {
        gameOverMessageOnButton()
        return;
    }
    playerMove(3);
});
