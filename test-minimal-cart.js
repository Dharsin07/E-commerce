const http = require('http');

// Test adding item to cart (minimal storage)
function testAddToCart() {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/cart',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test-token',
      'x-user-id': 'test-user-new'
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
        console.log('Add to cart response:', JSON.stringify(result, null, 2));
        
        // Now test getting cart items
        testGetCartItems();
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

// Test getting cart items (with product enrichment)
function testGetCartItems() {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/cart',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test-token',
      'x-user-id': 'test-user-new'
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
        console.log('\nGet cart items response:');
        console.log(JSON.stringify(result, null, 2));
        
        if (result.success && result.data.items) {
          console.log('\nCart items with enriched data:');
          result.data.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price} (${item.quantity}x)`);
            console.log(`   Image: ${item.image.substring(0, 50)}...`);
            console.log(`   Product ID: ${item.productId}`);
            console.log('');
          });
        }
      } catch (error) {
        console.error('Failed to parse response:', error.message);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request failed:', error.message);
  });

  req.end();
}

testAddToCart();
