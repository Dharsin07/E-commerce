const fs = require('fs');
const path = require('path');

// Reset cart storage for clean test
const CART_STORAGE_FILE = path.join(__dirname, 'backend/data/cart-storage.json');

try {
  const emptyCart = {};
  fs.writeFileSync(CART_STORAGE_FILE, JSON.stringify(emptyCart, null, 2));
  console.log('Cart storage reset for clean testing!');
} catch (error) {
  console.error('Reset failed:', error.message);
}
