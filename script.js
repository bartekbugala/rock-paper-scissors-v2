'use strict'

let resultDiv = document.getElementById('result');
let roundsNumber = document.getElementById('rounds-number');

let btnRock = document.getElementById('button-rock');
let btnPaper = document.getElementById('button-paper');
let btnScissors = document.getElementById('button-scissors');

let btnStart = document.getElementById('button-start');

let outputDiv = document.getElementById('output');

let resultPlayer = 0;
let resultComputer = 0;
let roundsToWin;
let gameOver = false;
let gameOverInfo = false;

let gameOverMsg = '';

const moves = { rock: 'ROCK', paper: 'PAPER', scissors: 'SCISSORS' }

function randomOf3() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    const computerMoves = { 1: moves.rock, 2: moves.paper, 3: moves.scissors };
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
        gameOverMsg = wrapWithSpan('YOU WON THE ENTIRE GAME!', 'player');
        return addLineMsg(outputDiv, gameOverMsg);
    }
    if (resultComputer === roundsToWin) {
        gameOver = true;
        gameOverMsg = wrapWithSpan('COMPUTER WON THE ENTIRE GAME!', 'computer');
        return addLineMsg(outputDiv, gameOverMsg);
    }
    return;
}

function singleWinMsg(playerChoice, computerChoice, wonLostMsg) {
    const keyFigures = {
        'ROCK': wrapWithSpan(moves.rock, 'rock'),
        'PAPER': wrapWithSpan(moves.paper, 'paper'),
        'SCISSORS': wrapWithSpan(moves.scissors, 'scissors')
    }
    return wonLostMsg + 'You played: ' + keyFigures[playerChoice] + ', Computer played: ' + keyFigures[computerChoice];
}

function checkWinner(playerChoice) {
    let computerChoice = randomOf3();

    let winMsg = wrapWithSpan('YOU WON!', 'player');
    let looseMsg = wrapWithSpan('YOU LOST', 'computer');
    let tieMsg = wrapWithSpan('TIE!');

    if (playerChoice === computerChoice) {
        return singleWinMsg(playerChoice, computerChoice, tieMsg);
    } else if ((playerChoice === moves.rock && computerChoice === moves.paper) || (playerChoice === moves.scissors && computerChoice === moves.rock) || (playerChoice === moves.paper && computerChoice === moves.scissors)) {
        resultComputer++;
        return singleWinMsg(playerChoice, computerChoice, looseMsg);
    }
    resultPlayer++;
    return singleWinMsg(playerChoice, computerChoice, winMsg);
}

function wrapWithSpan(textInsideSpan, idOfSpan) {
    let spanExpression;
    if (idOfSpan === undefined) {
        spanExpression = '<span>' + textInsideSpan + '</span>';
        return spanExpression;
    }
    spanExpression = '<span id="' + idOfSpan + '">' + textInsideSpan + '</span>';
    return spanExpression;
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
    if (gameOverInfo === true) {
        return;
    }
    gameOverInfo = true;
    let msg = 'Game over, please press the New Game button!';
    addLineMsg(outputDiv, msg);
}

function handleBtnClick(move) {
    return function () {
        if (gameOver) {
            gameOverMessageOnButton();
            return;
        }
        playerMove(move);
    }
}

btnStart.addEventListener('click', function () {
    roundsToWin = prompt('How many rounds to win? (Maximum 99)');
    if (roundsToWin === null) {
        return;
    }
    roundsToWin = parseInt(roundsToWin);
    if (isNaN(roundsToWin) || roundsToWin <= 0) {
        updateLineMsg(outputDiv, 'Wrong input, please enter a positive number.');
        return;
    }
    updateLineMsg(outputDiv, 'New game started');
    resultPlayer = 0;
    resultComputer = 0;
    gameOver = false;
    gameOverInfo = false;
    updateResultMsg();
    updateLineMsg(roundsNumber, roundsToWin);
});

// Figure Buttons
btnRock.addEventListener('click', handleBtnClick(moves.rock));
btnPaper.addEventListener('click', handleBtnClick(moves.paper));
btnScissors.addEventListener('click', handleBtnClick(moves.scissors));