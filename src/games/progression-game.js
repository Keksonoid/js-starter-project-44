import runGame from '../index.js';
import randomInt from '../utils.js';

const getProgression = (start, step, length, hiddenNumberIndex) => {
  let progression = '';

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenNumberIndex) {
      progression += '... ';
    } else {
      progression += `${start + step * i} `;
    }
  }

  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const gameData = () => {
  const progressionLength = randomInt(5, 10);
  const firstNumber = randomInt(1, 50);
  const step = randomInt(1, 10);
  const hiddenNumberIndex = randomInt(0, progressionLength);

  const question = getProgression(firstNumber, step, progressionLength, hiddenNumberIndex);

  const correctAnswer = `${firstNumber + step * hiddenNumberIndex}`;

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
