const fetch = require('node-fetch');

async function testCartFix() {
  try {
    console.log('Testing cart API with user: nUpVh5zs6be3U60v1jVJ2DLeKqT2');
    
    const response = await fetch('http://localhost:5000/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test-token',
        'x-user-id': 'nUpVh5zs6be3U60v1jVJ2DLeKqT2'
      }
    });
    
    const result = await response.json();
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
    console.error('Test failed:', error.message);
  }
}

testCartFix();
