import runGame from '../index.js';
import randomInt from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const number = randomInt(1, 100);

  const question = number;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
