const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const portfolioData = require('./data/portfolio.json');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// --- API Routes ---

// GET /api/portfolio — return full portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// POST /api/contact — accept { name, email, message } with validation
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validation: all fields required
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required: name, email, message',
    });
  }

  // Validation: email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format',
    });
  }

  // In a real app you'd persist the message; for now just acknowledge it.
  console.log('Contact form submission:', { name, email, message });

  res.json({
    success: true,
    message: 'Pesan berhasil dikirim! Terima kasih telah menghubungi.',
  });
});

// --- Static files (production) ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

  // Fallback: serve index.html for any non-API route (SPA support)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
