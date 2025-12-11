const express = require('express');
const path = require('path');
const gameRoutes = require('./routes/gameRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(loggerMiddleware);

// Routes
app.use('/api', gameRoutes);

// Root route — serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});