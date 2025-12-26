// Verify cart operations are working
const API_BASE = 'http://localhost:5000/api';

async function verifyCartFix() {
  try {
    // Test 1: Add to cart
    console.log('Testing add to cart...');
    const addResponse = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: 1, quantity: 2 })
    });
    const addResult = await addResponse.json();
    console.log('Add result:', addResult.success ? 'SUCCESS' : 'FAILED');
    
    if (addResult.success) {
      // Test 2: Update quantity
      console.log('Testing update quantity...');
      const updateResponse = await fetch(`${API_BASE}/cart/1`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: 3 })
      });
      const updateResult = await updateResponse.json();
      console.log('Update result:', updateResult.success ? 'SUCCESS' : 'FAILED');
      
      // Test 3: Remove from cart
      console.log('Testing remove from cart...');
      const removeResponse = await fetch(`${API_BASE}/cart/1`, {
        method: 'DELETE'
      });
      const removeResult = await removeResponse.json();
      console.log('Remove result:', removeResult.success ? 'SUCCESS' : 'FAILED');
    }
    
    console.log('Cart operations verification completed');
  } catch (error) {
    console.error('Verification failed:', error.message);
  }
}

verifyCartFix();
