const fs = require('fs');
const path = require('path');

// Check what's actually in the cart storage file
const CART_STORAGE_FILE = path.join(__dirname, 'backend/data/cart-storage.json');

try {
  if (fs.existsSync(CART_STORAGE_FILE)) {
    const data = fs.readFileSync(CART_STORAGE_FILE, 'utf8');
    const cartData = JSON.parse(data);
    console.log('Current cart storage contents:');
    console.log(JSON.stringify(cartData, null, 2));
    
    // Check if any items have product details stored
    Object.keys(cartData).forEach(userId => {
      const items = cartData[userId];
      console.log(`\nUser ${userId} has ${items.length} items:`);
      items.forEach((item, index) => {
        console.log(`  Item ${index + 1}:`);
        console.log(`    Stored fields: ${Object.keys(item).join(', ')}`);
        if (item.name) console.log(`    Has name: ${item.name}`);
        if (item.price) console.log(`    Has price: ${item.price}`);
        if (item.image) console.log(`    Has image: ${item.image.substring(0, 30)}...`);
      });
    });
  } else {
    console.log('Cart storage file does not exist');
  }
} catch (error) {
  console.error('Error reading cart storage:', error.message);
}
