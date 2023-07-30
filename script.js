'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won the game!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score < 1) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.number').textContent = secretNumber = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
