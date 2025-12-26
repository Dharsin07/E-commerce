const express = require('express');
const router = express.Router();
const {
  getCartItems,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  getCartSummary
} = require('../controllers/cartController-database'); // Use database version
const { authenticateToken } = require('../middleware/auth');

// All cart routes require authentication
router.use(authenticateToken);

router.get('/', getCartItems);
router.get('/summary', getCartSummary);
router.post('/', addToCart);
router.put('/:product_id', updateCartItemQuantity);
router.delete('/:product_id', removeFromCart);
router.delete('/', clearCart);

module.exports = router;
