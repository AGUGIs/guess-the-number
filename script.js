let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7;
let gameOver = false;

const userGuessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitGuess');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');
const restartButton = document.getElementById('restart');

function updateAttemptsDisplay() {
  attemptsDiv.textContent = `Осталось попыток: ${attemptsLeft}`;
}

function checkGuess() {
  if (gameOver) return;

  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageDiv.textContent = 'Пожалуйста, введи число от 1 до 100.';
    messageDiv.style.color = 'orange';
    return;
  }

  attemptsLeft--;

  if (userGuess === secretNumber) {
    messageDiv.textContent = '🎉 Поздравляем! Ты угадал число!';
    messageDiv.style.color = '#4caf50';
    gameOver = true;
    restartButton.style.display = 'inline-block';
  } else if (attemptsLeft === 0) {
    messageDiv.textContent = `💀 Ты проиграл! Загаданное число было: ${secretNumber}`;
    messageDiv.style.color = '#f44336';
    gameOver = true;
    restartButton.style.display = 'inline-block';
  } else if (userGuess < secretNumber) {
    messageDiv.textContent = 'Слишком мало! 🔼';
    messageDiv.style.color = '#ffeb3b';
  } else {
    messageDiv.textContent = 'Слишком много! 🔽';
    messageDiv.style.color = '#ffeb3b';
  }

  updateAttemptsDisplay();
  userGuessInput.value = '';
  userGuessInput.focus();
}

submitButton.addEventListener('click', checkGuess);

userGuessInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

restartButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 7;
  gameOver = false;
  messageDiv.textContent = '';
  restartButton.style.display = 'none';
  updateAttemptsDisplay();
  userGuessInput.value = '';
  userGuessInput.focus();
});

// Инициализация
updateAttemptsDisplay();
userGuessInput.focus();
