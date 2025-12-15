const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Public routes
router.get('/', productController.getProducts);
router.get('/categories', productController.getCategories);
router.get('/featured', productController.getFeaturedProducts);
router.get('/search', productController.searchProducts);
router.get('/:id', productController.getProductById);

// Admin only routes (temporarily without auth for testing)
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id/stock', productController.updateStock);

module.exports = router;
