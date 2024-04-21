const icons = document.querySelector('#icons');
const ico = document.querySelector('.ico');
const rock = document.querySelector('.rock');
const computer = document.querySelector('.computer');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result')


function getComputerChoice() {
	const value = ['rock', 'scissors', 'paper'];
	let randomNumber = Math.floor(Math.random() * 3);
	return value[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
			result.textContent = `You Win! ${playerSelection} beats ${computerSelection}😀`;
			result.style.color = 'gree'
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}😀`;
		result.style.color = 'green'
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		result.textContent = `You Win! ${playerSelection} beats ${computerSelection}😀`;
		result.style.color = 'green'
	} else if (playerSelection === computerSelection) {
		result.textContent = `Draw! ${playerSelection} = ${computerSelection}😑`;
		result.style.color = 'blue'
	} else {
		result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}😔`;
		result.style.color = 'red'
	}
}


icons.addEventListener('click', function(e) {
	ico.style.backgroundRepeat = 'no-repeat';
	ico.style.backgroundColor = '';
	if (e.target === paper || e.target.parentElement === paper) {
			ico.style.backgroundImage = 'url(icons/paper.png)';
			playerSelection = 'paper';
	}
	if (e.target === rock || e.target.parentElement === rock) {
			ico.style.backgroundImage = 'url(icons/rock.png)';
			playerSelection = 'rock';
	}
	if (e.target === scissors || e.target.parentElement === scissors) {
			ico.style.backgroundImage = 'url(icons/scissors.png)';
			playerSelection = 'scissors';
	}
	playGame();
});




function playGame() {
	let computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	computer.style.backgroundImage = `url(icons/${computerSelection}.png)`;
}

console.log(result)