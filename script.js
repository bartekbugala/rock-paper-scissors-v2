'use strict'

let resultDiv = document.getElementById('result');

let btnRock = document.getElementById('button-rock');
let btnPaper = document.getElementById('button-paper');
let btnScissors = document.getElementById('button-scissors');

let outputDiv = document.getElementById('output');

let btnStart = document.getElementById('button-start');

let playerChoice;
let resultPlayer = 0;
let resultComputer = 0;

function randomNumber(num) {
    return Math.floor((Math.random() * num) + 1);
}

function computerMove() {
    let computerChoice = randomNumber(3);
    return computerChoice;
}

/*
1 ROCK
2 PAPER
3 SCISSORS
*/

function checkWinner(playerChoice,computerChoice) {
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


function playerMove(playerChoice) {
   let computerChoice = computerMove();
   return checkWinner(playerChoice,computerChoice); 
}

function displayMessage(domElement,textToDisplay){
    domElement.innerHTML = textToDisplay;
}

function updateResult(){
    resultDiv.innerHTML = '<span>' + resultPlayer + '</span>' + ' - ' + '<span>' + resultComputer + '</span>';
}


btnRock.addEventListener('click', function () {
    let resultMsg = playerMove(1);
    displayMessage(outputDiv,resultMsg);
    updateResult();

});
btnPaper.addEventListener('click', function () {
    let resultMsg =playerMove(2);
    displayMessage(outputDiv,resultMsg);
    updateResult();

});
btnScissors.addEventListener('click', function () {
    let resultMsg =playerMove(3);
    displayMessage(outputDiv,resultMsg);
    updateResult();

});
btnStart.addEventListener('click', function () {
    displayMessage(outputDiv,'CHOOSE FIGURE TO START');
    resultPlayer = 0;
    resultComputer = 0;
    updateResult();

});