const readline = require('readline');

// Create interface to read/write
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

const question = questionText =>
  new Promise(resolve => {
    rl.question(questionText, answer => resolve(answer));
  });

const validOptions = ['rock', 'paper', 'scissors'];

const game = async () => {
  // Ask Question
  let choice = null;

  // Check if choice is in valid options
  while (!validOptions.includes(choice)) {
    choice = await question(
      `Please choose one of the following

      GAME RULES

      Rock destroys scissors.
      Scissors cut paper.
      Paper covers rock.
      If there’s a tie, then the game ends in a draw

 Rock
 Paper
 Scissors
 `
    );

    // Convert to lower case for our valid option check (Case Insenstive)
    choice = choice.toLowerCase();
  }

  const computerChoice = validOptions[getRandomInt(2)];

  if (choice === computerChoice) {

    console.log('There was a tie');

  } else if (

    (choice === 'rock' && computerChoice === 'scissors') || // Rock beats Scissors
    (choice === 'scissors' && computerChoice === 'paper') || // Scissors beats Paper
    (choice === 'paper' && computerChoice === 'rock') // Paper beats Rock
  ) {
    console.log(`The player won`);
  } else {
    console.log('The computer won');
  } 
  console.log('Player is choosing : ' + choice);

  console.log('the computer is choosing : ' + computerChoice);

  console.log(getRandomInt(choice,computerChoice));

};

game();
