// Test cart display and product data
const API_BASE = 'http://localhost:5000/api';

async function testCartDisplay() {
  try {
    console.log('=== Testing Cart Display ===');
    
    // Test 1: Get cart items
    console.log('\n1. Getting cart items...');
    const cartResponse = await fetch(`${API_BASE}/cart`);
    console.log('Cart status:', cartResponse.status);
    
    if (cartResponse.ok) {
      const cartResult = await cartResponse.json();
      console.log('Cart items:', JSON.stringify(cartResult, null, 2));
      
      if (cartResult.success && cartResult.data.items) {
        console.log(`Found ${cartResult.data.items.length} items in cart`);
        cartResult.data.items.forEach((item, index) => {
          console.log(`Item ${index + 1}:`, {
            id: item.id,
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          });
        });
      } else {
        console.log('No items in cart or failed to get items');
      }
    } else {
      const errorText = await cartResponse.text();
      console.log('Cart error:', errorText);
    }
    
    // Test 2: Try to add an item
    console.log('\n2. Adding item to cart...');
    const addResponse = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: 1, quantity: 1 })
    });
    console.log('Add status:', addResponse.status);
    
    if (addResponse.ok) {
      const addResult = await addResponse.json();
      console.log('Add result:', JSON.stringify(addResult, null, 2));
    } else {
      const errorText = await addResponse.text();
      console.log('Add error:', errorText);
    }
    
    // Test 3: Get cart items again to see if item was added
    console.log('\n3. Getting cart items after add...');
    const cartResponse2 = await fetch(`${API_BASE}/cart`);
    if (cartResponse2.ok) {
      const cartResult2 = await cartResponse2.json();
      console.log('Cart after add:', JSON.stringify(cartResult2, null, 2));
    }
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testCartDisplay();
