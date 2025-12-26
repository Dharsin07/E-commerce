// Test script to check available products
const API_BASE = 'http://localhost:5000/api';

async function checkProducts() {
  console.log('Checking available products...');
  
  try {
    const response = await fetch(`${API_BASE}/products`);
    const products = await response.json();
    console.log('Available products:', products);
    
    if (products.length > 0) {
      const testProduct = products[0];
      console.log('Using product for cart test:', testProduct);
      
      // Test adding to cart first
      console.log('Adding product to cart...');
      const addResponse = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          productId: testProduct.id, 
          quantity: 1 
        })
      });
      
      const addResult = await addResponse.json();
      console.log('Add to cart response:', addResult);
      
      // Test update quantity
      console.log('Updating quantity...');
      const updateResponse = await fetch(`${API_BASE}/cart/${testProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: 2 })
      });
      
      const updateResult = await updateResponse.json();
      console.log('Update response:', updateResult);
      
      // Test remove from cart
      console.log('Removing from cart...');
      const removeResponse = await fetch(`${API_BASE}/cart/${testProduct.id}`, {
        method: 'DELETE'
      });
      
      const removeResult = await removeResponse.json();
      console.log('Remove response:', removeResult);
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
}

checkProducts();
