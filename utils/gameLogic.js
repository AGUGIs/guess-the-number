class Game {
  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attemptsLeft = 7;
    this.gameOver = false;
  }

  checkGuess(guess) {
    if (this.gameOver) return { status: 'game_over' };

    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      return { status: 'invalid', message: '⚠️ Введи число от 1 до 100!' };
    }

    this.attemptsLeft--;

    if (num === this.secretNumber) {
      this.gameOver = true;
      return {
        status: 'win',
        message: `🎉 УРА! Ты угадал число ${this.secretNumber}!`,
        secretNumber: this.secretNumber
      };
    } else if (this.attemptsLeft === 0) {
      this.gameOver = true;
      return {
        status: 'lose',
        message: `💀 К сожалению, ты проиграл... Загаданное число было: ${this.secretNumber}`,
        secretNumber: this.secretNumber
      };
    } else if (num < this.secretNumber) {
      return { status: 'low', message: '🔺 Слишком мало! Попробуй больше.' };
    } else {
      return { status: 'high', message: '🔻 Слишком много! Попробуй меньше.' };
    }
  }

  getAttemptsLeft() {
    return this.attemptsLeft;
  }

  reset() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attemptsLeft = 7;
    this.gameOver = false;
  }
}

module.exports = Game;