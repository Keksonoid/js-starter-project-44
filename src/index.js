import readlineSync from 'readline-sync';

const runGame = (descr, getGameData) => {
  const roundCount = 3;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(descr);

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, correctAnswer] = getGameData();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

export default runGame;
