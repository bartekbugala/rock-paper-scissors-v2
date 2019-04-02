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
let gameOverInfo = false;

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
        gameOverMsg = '<span id="player">YOU WON THE ENTIRE GAME</span>';
        return addLineMsg(outputDiv, gameOverMsg);
    } if (resultComputer === roundsToWin) {
        gameOver = true;
        gameOverMsg = '<span id="computer">COMPUTER WON THE ENTIRE GAME</span>';
        return addLineMsg(outputDiv, gameOverMsg);
    }
    return;
}

function singleWinMsg(playerChoice,computerChoice,wonLost) {
    let keyFigures = {
        1: '<span id="rock">ROCK</span>',
        2: '<span id="paper">PAPER</span>',
        3: '<span id="scissors">SCISSORS</span>'
    }
    return wonLost +'You played: '+keyFigures[playerChoice]+', Computer played: '+keyFigures[computerChoice];
}

function checkWinner(playerChoice) {
    let computerChoice = randomOf3();
    
    let winMsg = '<span id="player">YOU WON!</span> ';
    let looseMsg = '<span id="computer">YOU LOST!</span> ';
    let tieMsg = '<span>TIE!</span> '

    if ((playerChoice === 1 && computerChoice === 2)||(playerChoice === 3 && computerChoice === 1)||(playerChoice === 2 && computerChoice === 3)) {
        resultComputer++;
        return singleWinMsg(playerChoice,computerChoice,looseMsg);
    }    
    if ((playerChoice === 2 && computerChoice === 1)||(playerChoice === 1 && computerChoice === 3)||(playerChoice === 3 && computerChoice === 2)) {
        resultPlayer++;
        return singleWinMsg(playerChoice,computerChoice,winMsg);
    }    
    return singleWinMsg(playerChoice,computerChoice,tieMsg);
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
    if (gameOverInfo===true){
        return
    }
    gameOverInfo = true;
    let msg = "Game over, please press the New Game button!";
    addLineMsg(outputDiv, msg);
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
    gameOverInfo = false;
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
