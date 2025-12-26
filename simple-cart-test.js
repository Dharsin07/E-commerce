// Simple cart test with specific product
const API_BASE = 'http://localhost:5000/api';

async function testCartWithSpecificProduct() {
  console.log('Testing cart operations with product ID 1...');
  
  try {
    // First add product to cart
    console.log('1. Adding product 1 to cart...');
    const addResponse = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: 1, quantity: 1 })
    });
    const addResult = await addResponse.json();
    console.log('Add result:', addResult);
    
    // Test update quantity
    console.log('2. Updating quantity to 3...');
    const updateResponse = await fetch(`${API_BASE}/cart/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: 3 })
    });
    const updateResult = await updateResponse.json();
    console.log('Update result:', updateResult);
    
    // Test remove from cart
    console.log('3. Removing product from cart...');
    const removeResponse = await fetch(`${API_BASE}/cart/1`, {
      method: 'DELETE'
    });
    const removeResult = await removeResponse.json();
    console.log('Remove result:', removeResult);
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testCartWithSpecificProduct();
