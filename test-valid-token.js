const http = require('http');

// Test with a token that will be processed by auth middleware
function testWithValidToken() {
  console.log('=== Testing Add to Cart with Valid Token ===');
  
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/cart',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test-token-12345678'  // This will generate user-test-to as user ID
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        console.log('Add to cart response:');
        console.log(JSON.stringify(result, null, 2));
        
        // Check what's actually stored
        setTimeout(() => {
          checkStoredCart();
        }, 1000);
      } catch (error) {
        console.error('Failed to parse response:', error.message);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request failed:', error.message);
  });

  req.write(JSON.stringify({ productId: 1, quantity: 2 }));
  req.end();
}

// Check what's stored in cart file
function checkStoredCart() {
  const fs = require('fs');
  const path = require('path');
  
  const CART_STORAGE_FILE = path.join(__dirname, 'backend/data/cart-storage.json');
  
  try {
    const data = fs.readFileSync(CART_STORAGE_FILE, 'utf8');
    const cartData = JSON.parse(data);
    
    console.log('\n=== Stored Cart Data ===');
    console.log('All users in cart:', Object.keys(cartData));
    
    Object.keys(cartData).forEach(userId => {
      console.log(`\nUser ${userId} cart:`);
      cartData[userId].forEach((item, index) => {
        console.log(`  Item ${index + 1}:`, JSON.stringify(item, null, 2));
      });
    });
  } catch (error) {
    console.error('Error reading cart storage:', error.message);
  }
}

testWithValidToken();
