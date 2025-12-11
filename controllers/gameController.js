const Game = require('../utils/gameLogic');

let currentGame = new Game();

const startGame = (req, res) => {
  currentGame.reset();
  res.json({
    message: 'Игра начата!',
    attemptsLeft: currentGame.getAttemptsLeft()
  });
};

const guessNumber = (req, res) => {
  const { guess } = req.body;

  if (!guess) {
    return res.status(400).json({ error: 'Пожалуйста, отправьте число в теле запроса.' });
  }

  const result = currentGame.checkGuess(guess);

  res.json({
    ...result,
    attemptsLeft: currentGame.getAttemptsLeft(),
    gameOver: currentGame.gameOver
  });
};

module.exports = {
  startGame,
  guessNumber
};