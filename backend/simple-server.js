const express = require('express');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const app = express();

// Enable compression
app.use(compression());

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Body parsing
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Simple products endpoint
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: [],
    message: 'Products endpoint working'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
});
