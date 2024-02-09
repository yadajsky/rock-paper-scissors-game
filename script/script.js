let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const randomChoice =  Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const gameResult = {
    userWin: 'Yay! You win! ',
    computerWin: 'You lose! 🥹 ',
    tie: 'This turn a tie!',
    invalidInput: 'Please, enter a valid input such as rock, paper or scissors'
}

const playerSelection = () => {
    const userInput = prompt('Hi! This is a rock, paper or scissors game. Ready? Enter your weapon here:','Type "rock", "paper" or "scissors or type "quit" to exit the game.');
    if(userInput === null){
        return null;
    }else if(userInput === 'quit'){
        return null;
    }
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else{
        return gameResult.invalidInput;
    }
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === null){
        return 'Hope you come back to play again soon!';
    } else if(playerSelection === gameResult.invalidInput){
        return gameResult.invalidInput;
    }else if(playerSelection.toLowerCase() === computerSelection){
        return gameResult.tie;
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || 
                (playerSelection.toLowerCase() === 'paper'&& computerSelection === 'rock')||
                (playerSelection.toLowerCase() === 'scissors'&& computerSelection === 'paper')){
                    playerScore++;
                    return gameResult.userWin + `${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')||
                (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')||
                (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')){
                    computerScore++;
                    return gameResult.computerWin + `${computerSelection} beats ${playerSelection}`;
    }else{
        return `You choose: ${playerSelection} and computer choose: ${computerSelection}`;
    }
}
const game = () => {
    for(let i=0; i<5; i){
        const result = playRound(playerSelection(), computerPlay());
        console.log(result);
        if(result !== gameResult.invalidInput){
            i++;
        }
    }
   
    if(playerScore === computerScore){
        console.log('It\'s a tie!');
    }
    else if(playerScore > computerScore){
        console.log(`Game Summarize: Yay! You wins the game! Your Score:${playerScore}, Computer Score:${computerScore}`);
    }else{
        console.log(`Sorry, you lose in this game! Your Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
}

game();

