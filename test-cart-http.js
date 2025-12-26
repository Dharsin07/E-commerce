const http = require('http');

function testCartFix() {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/cart',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test-token',
      'x-user-id': 'nUpVh5zs6be3U60v1jVJ2DLeKqT2'
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
        console.log('Cart response:', JSON.stringify(result, null, 2));
        
        if (result.success && result.data.items) {
          console.log('\nCart items:');
          result.data.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price} (${item.quantity}x)`);
            console.log(`   Image: ${item.image}`);
            console.log(`   Product ID: ${item.productId}`);
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

testCartFix();
