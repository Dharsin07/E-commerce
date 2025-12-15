const express = require('express');
const router = express.Router();

// Temporary authentication endpoints (Firebase disabled for now)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }

    // Temporary response - will be replaced with Firebase
    res.status(200).json({
      success: true,
      message: 'Login endpoint - Firebase temporarily disabled',
      data: { email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Temporary token verification endpoint
router.post('/verify', async (req, res) => {
  try {
    const { token } = req.body;
    
    // Temporary response - will be replaced with Firebase verification
    res.status(200).json({
      success: true,
      message: 'Token verification - Firebase temporarily disabled',
      data: { uid: 'temp-user', email: 'temp@example.com' }
    });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to verify token'
    });
  }
});

module.exports = router;
