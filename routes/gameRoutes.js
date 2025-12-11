const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// GET /api/start — начать новую игру
router.get('/start', gameController.startGame);

// POST /api/guess — проверить догадку
router.post('/guess', gameController.guessNumber);

module.exports = router;