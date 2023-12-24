let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses: 0,
  Ties: 0
}; //score object storing the score
//localStorage.getItem('score') load the score
updateScoreElement();

// Play the game function
function playGame(playerMove) {
  // Get the computer's move
  const computerMove = pickComputerMove();
 
  // Calculate the game result
  let result = '';
  if (playerMove === 'scissors') {
     if (computerMove === 'Rock') {
       result = 'You Lose.';
     } else if (computerMove === 'Paper') {
       result = 'You Win.';
     } else if (computerMove === 'Scissors') {
       result = 'Tie.';
     }
 
  } else if (playerMove === 'paper') {
     if (computerMove === 'Rock') {
       result = 'You Win.';
     } else if (computerMove === 'Paper') {
       result = 'Tie.';
     } else if (computerMove === 'Scissors') {
       result = 'You Lose.';
     }
 
  } else if (playerMove === 'rock') {
     if (computerMove === 'Rock') {
       result = 'Tie.';
     } else if (computerMove === 'Paper') {
       result = 'You Lose.';
     } else if (computerMove === 'Scissors') {
       result = 'You Win.';
     }
  }
 
  // Update the score based on the result
  if (result === 'You Win.') {
     score.wins += 1;
  } else if (result === 'You Lose.') {
     score.losses += 1;
  } else if (result === 'Tie.') {
     score.Ties += 1;
  }
 
  // Store the score in local storage
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
 //JSON.stringigy(score) convert the first line of score object into string to store it into the localStorage by giving it a name 'score' which is the first parameter

  // Display the game result
  document.querySelector('.js-result').innerHTML = result;
 
  // Display the moves made by the player and the computer
  document.querySelector('.js-moves').innerHTML = `You
  <img src="imgs/${playerMove}-emoji.png" class="move-icon" id="sub-move-icon">
  <img src="imgs/${computerMove}-emoji.png" class="move-icon" id="sub-move-icon">
  Computer`;
 }

// updateScoreElement function
function updateScoreElement() {
  // querySelector for '.js-score' class
  document.querySelector('.js-score')
     // set innerHTML with wins, losses, and ties
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`;
 }
 function pickComputerMove() {
  // Generate random number
  const randomNumber = Math.random();
 
  let computerMove = '';
 
  // Determine computer move based on random number
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = ('Rock');
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = ('Paper');
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = ('Scissors');
  }
  return computerMove;
 
 }