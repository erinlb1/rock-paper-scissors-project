function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
    } else {
    console.log ('Error: not a valid response');
    }
};

function getComputerChoice () {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else { (randomNum === 2)
        return 'scissors'; 
    }    
};

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It was a tie!';
    }
    if (userChoice === 'rock') 
      if (computerChoice === 'paper') {
        return 'The computer won!';
    } else {
        return 'You won!';
    }
    if (userChoice === 'scissors')
        if (computerChoice === 'rock'){
        return 'The computer won!';
    } else {
        return 'You won!';
    }
    if (userChoice === 'paper')
        if (computerChoice === 'scissors') {
        return 'The computer won!';
    } else {
        return 'You won!'
    }
       if (userChoice === 'bomb') { 
        return 'YOU BLEW UP THE COMPUTER!';
    }
};

function playGame(userChoice, computerChoice) {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice);
    console.log('The computer chose ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
 };

 playGame();
