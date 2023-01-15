import runGame from '../index.js';
import randomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calc = (firstNum, secondNum, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
  }

  return result;
};

const gameData = () => {
  const num1 = randomInt(1, 50);
  const num2 = randomInt(1, 50);

  const operators = ['-', '+', '*'];
  const operator = operators[randomInt(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = calc(num1, num2, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
