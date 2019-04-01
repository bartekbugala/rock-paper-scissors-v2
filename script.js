'use strict'

let btnRock = document.getElementById('button-rock');
let btnPaper = document.getElementById('button-paper');
let btnScissors = document.getElementById('button-scissors');

let playerChoice;
let resultPlayer = 0;
let resultComputer;
let roundCount;

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
        return 'YOU LOST! you played ROCK, computer played PAPER';
    } else if (playerChoice === 2 && computerChoice === 1) {
        return 'YOU WON! you played PAPER, computer played ROCK';
    } else if (playerChoice === 3 && computerChoice === 1) {
        return 'YOU WON! you played SCISSORS, computer played ROCK';
    } else if (playerChoice === 1 && computerChoice === 3) {
        return 'YOU WON! You played ROCK, computer played SCISSORS';
    } else if (playerChoice === 3 && computerChoice === 2) {
        return 'YOU WON! You played SCISSORS, Computer played PAPER';
    } else if (playerChoice === 2 && computerChoice === 3) {
        return 'YOU LOST! you played PAPER, computer played SCISSORS';
    } return 'DRAW';
  }


function playerMove(playerChoice) {
    computerMove()
}