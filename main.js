function getComputerChoice() {
	const value = ['rock', 'scissors', 'paper']
	let randomNumber = Math.floor(Math.random() * 3)
	return value[randomNumber]
}

console.log(Math.floor(Math.random() * 3))

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'paper' && computerSelection === 'rock') {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
	} else if (playerSelection === computerSelection) {
		console.log(`Draw! ${playerSelection} = ${computerSelection}`)
	} else {
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
	}
}

function playGame() {
	let playerSelection = prompt('Your choice').toLowerCase()
	while (
		playerSelection !== 'paper' &&
		playerSelection !== 'rock' &&
		playerSelection !== 'scissors'
	) {
		playerSelection = prompt('Incorrect input. Try again').toLowerCase()
	}
	let computerSelection = getComputerChoice()

	playRound(playerSelection, computerSelection)
}

playGame()
