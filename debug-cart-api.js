// Debug cart API calls with detailed error information
const API_BASE = 'http://localhost:5000/api';

async function debugCartAPI() {
  try {
    console.log('=== Testing Cart API ===');
    
    // First add an item
    console.log('\n1. Adding item to cart...');
    const addResponse = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: 1, quantity: 1 })
    });
    const addResult = await addResponse.json();
    console.log('Add status:', addResponse.status);
    console.log('Add result:', JSON.stringify(addResult, null, 2));
    
    if (addResult.success) {
      // Try to update quantity
      console.log('\n2. Updating quantity...');
      const updateResponse = await fetch(`${API_BASE}/cart/1`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: 3 })
      });
      console.log('Update status:', updateResponse.status);
      const updateResult = await updateResponse.json();
      console.log('Update result:', JSON.stringify(updateResult, null, 2));
      
      // Try to remove item
      console.log('\n3. Removing item...');
      const removeResponse = await fetch(`${API_BASE}/cart/1`, {
        method: 'DELETE'
      });
      console.log('Remove status:', removeResponse.status);
      const removeResult = await removeResponse.json();
      console.log('Remove result:', JSON.stringify(removeResult, null, 2));
    }
    
  } catch (error) {
    console.error('Debug failed:', error);
  }
}

debugCartAPI();
