const fs = require('fs');
const path = require('path');

// Clean up old placeholder cart data
const CART_STORAGE_FILE = path.join(__dirname, 'backend/data/cart-storage.json');

try {
  const cartData = JSON.parse(fs.readFileSync(CART_STORAGE_FILE, 'utf8'));
  
  // Clear cart data for users with placeholder products
  const usersToClean = ['test-user-id', 'user-123', 'user-456', 'TtTV4N4F7ehgzkofK5amKppVNns1'];
  
  usersToClean.forEach(userId => {
    if (cartData[userId]) {
      console.log(`Clearing cart for user: ${userId}`);
      cartData[userId] = [];
    }
  });
  
  fs.writeFileSync(CART_STORAGE_FILE, JSON.stringify(cartData, null, 2));
  console.log('Cart cleanup completed!');
  
} catch (error) {
  console.error('Cleanup failed:', error.message);
}
