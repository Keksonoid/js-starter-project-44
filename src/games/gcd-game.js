import runGame from '../index.js';
import randomInt from '../utils.js';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = getGcd(num1, num2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
