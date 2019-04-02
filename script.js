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

let gameOverMsg = '';

function randomOf3() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerMoves = {
        1: 'ROCK',
        2: 'PAPER',
        3: 'SCISSORS'
    }
    return computerMoves[randomNumber];
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

function singleWinMsg(playerChoice,computerChoice,wonLostMsg) {
    let keyFigures = {
        'ROCK': '<span id="rock">ROCK</span>',
        'PAPER': '<span id="paper">PAPER</span>',
        'SCISSORS': '<span id="scissors">SCISSORS</span>'
    }
    return wonLostMsg +'You played: '+keyFigures[playerChoice]+', Computer played: '+keyFigures[computerChoice];
}

function checkWinner(playerChoice) {
    let computerChoice = randomOf3();
    
    let winMsg = '<span id="player">YOU WON!</span> ';
    let looseMsg = '<span id="computer">YOU LOST!</span> ';
    let tieMsg = '<span>TIE!</span> ';
    
    console.log(playerChoice+' '+computerChoice);
    console.log(playerChoice === computerChoice);
    
    if (playerChoice === computerChoice) {
        return singleWinMsg(playerChoice,computerChoice,tieMsg);
    }
    else if ((playerChoice === 'ROCK' && computerChoice === 'PAPER')||(playerChoice === 'SCISSORS' && computerChoice === 'ROCK')||(playerChoice === 'PAPER' && computerChoice === 'SCISSORS')) {
        resultComputer++;
        return singleWinMsg(playerChoice,computerChoice,looseMsg);
    }    
    else
        resultPlayer++;
        return singleWinMsg(playerChoice,computerChoice,winMsg);    
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
        return;
    }
    gameOverInfo = true;
    let msg = 'Game over, please press the New Game button!';
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
    playerMove('ROCK');
});

btnPaper.addEventListener('click', function () {
    if (gameOver) {
        gameOverMessageOnButton()
        return;
    }
    playerMove('PAPER');
});

btnScissors.addEventListener('click', function () {
    if (gameOver) {
        gameOverMessageOnButton();
        return;
    }
    playerMove('SCISSORS');
});
