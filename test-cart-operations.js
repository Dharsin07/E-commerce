// Simple test script to verify cart API endpoints
const API_BASE = 'http://localhost:5000/api';

async function testCartOperations() {
  console.log('Testing cart operations...');
  
  try {
    // Test update quantity
    console.log('1. Testing update quantity...');
    const updateResponse = await fetch(`${API_BASE}/cart/test-product-1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: 2 })
    });
    
    const updateResult = await updateResponse.json();
    console.log('Update response:', updateResult);
    
    // Test remove from cart
    console.log('2. Testing remove from cart...');
    const removeResponse = await fetch(`${API_BASE}/cart/test-product-1`, {
      method: 'DELETE'
    });
    
    const removeResult = await removeResponse.json();
    console.log('Remove response:', removeResult);
    
    console.log('Cart operations test completed');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testCartOperations();
