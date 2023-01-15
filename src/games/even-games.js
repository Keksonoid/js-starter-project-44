import runGame from '../index.js';
import randomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const question = randomInt(1, 100);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
