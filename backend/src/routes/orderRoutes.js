const express = require('express');
const router = express.Router();
const { 
  getOrders, 
  createOrder, 
  updateOrderStatus, 
  getOrderById,
  getAllOrders 
} = require('../controllers/orderController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// User order routes
router.get('/', authenticateToken, getOrders);
router.post('/', authenticateToken, createOrder);
router.get('/:id', authenticateToken, getOrderById);

// Admin order routes
router.get('/admin/all', authenticateToken, requireAdmin, getAllOrders);
router.put('/:id/status', authenticateToken, requireAdmin, updateOrderStatus);

module.exports = router;
