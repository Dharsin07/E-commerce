const http = require('http');

// Test getting cart items to see enrichment
function testGetCartItems() {
  console.log('=== Testing Get Cart Items (Enrichment) ===');
  
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/cart',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test-token'
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
        console.log('Get cart items response:');
        console.log(JSON.stringify(result, null, 2));
        
        if (result.success && result.data.items) {
          console.log('\n=== Enriched Cart Items ===');
          result.data.items.forEach((item, index) => {
            console.log(`Item ${index + 1}:`);
            console.log(`  Name: ${item.name}`);
            console.log(`  Price: $${item.price}`);
            console.log(`  Image: ${item.image.substring(0, 50)}...`);
            console.log(`  Product ID: ${item.productId}`);
            console.log(`  Quantity: ${item.quantity}`);
            console.log('');
          });
        }
      } catch (error) {
        console.error('Failed to parse response:', error.message);
        console.log('Raw response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request failed:', error.message);
  });

  req.end();
}

testGetCartItems();
