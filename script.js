"use strict";

const moves = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
	const index = Math.floor(Math.random() * moves.length);
	return moves[index];
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
	const groomedSelection = playerSelection.toLowerCase();
	let result = -1;
	let str = '';
  	if (groomedSelection === computerSelection) {
		result = 0;
  	}
  	if (groomedSelection === 'rock' && computerSelection === 'scissors') result = 1;
	if (groomedSelection === 'scissors' && computerSelection === 'paper') result = 1;
	if (groomedSelection === 'paper' && computerSelection === 'rock') result = 1;
	
	if (result === 0) {
		str = new String(`TIE! Both players played ${capitalize(groomedSelection)}`);
		str.delta = 0;
	} else if (result > 0) {
		str = new String(`You Win! ${capitalize(groomedSelection)} beats ${capitalize(computerSelection)}`);
		str.delta = 1;
	} else {
		str = new String(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(groomedSelection)}`);
		str.delta = -1;
	}
	return str;
}

function game() {
	let tally = 0;
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt('What is your move?');
		const computerSelection = getComputerChoice();
		const roundResult = playRound(playerSelection, computerSelection);
		console.log(roundResult.toString());
		tally += roundResult.delta;
	}
	if (tally > 0) {
		console.log('You win the match!');
	} else if (tally < 0) {
		console.log('Computer wins the match!');
	} else {
		console.log('Match is tied.');
	}
}


game();
 
