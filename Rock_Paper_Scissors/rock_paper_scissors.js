const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
    return userInput;
  }else {
    console.log('Error!');
  }
  };
  function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0){
    return 'rock';
  }else if (computerChoice === 1){
    return 'paper';
  }else{
    return 'scissors';
  };
  };
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'it is a Tie!';
      };
      if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
          return 'The computer Won!';
        }else {
          return 'You Won!';
        };
      };
      if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
          return 'The computer Won';
        }else {
          return 'You Won!';
        };
      };
      if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
          return 'The computer Won!';
  
        }else {
          return 'You Won!';
        };
      };
      if (userChoice === 'bomb'){
        return 'You win!';
      };
    
  };
  
  function playGame(){
    const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();