const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getUsers
} = require('../controllers/adminController');

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsers);

module.exports = router;
