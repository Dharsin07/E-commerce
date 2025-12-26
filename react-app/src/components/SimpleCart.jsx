import React, { useState, useEffect } from 'react';

const SimpleCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simple API calls without optimistic updates
  const API_BASE = 'http://localhost:5000/api';

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_BASE}/cart`);
      const result = await response.json();
      if (result.success) {
        setCart(result.data.items || []);
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity })
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart after successful add
      } else {
        console.error('Add to cart failed:', result.error);
      }
    } catch (error) {
      console.error('Add to cart error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/cart/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart after successful update
      } else {
        console.error('Update quantity failed:', result.error);
      }
    } catch (error) {
      console.error('Update quantity error:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/cart/${productId}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart after successful remove
      } else {
        console.error('Remove from cart failed:', result.error);
      }
    } catch (error) {
      console.error('Remove from cart error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Simple Cart</h2>
      
      {loading && <p>Loading...</p>}
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ 
              border: '1px solid #ddd', 
              padding: '10px', 
              margin: '10px 0', 
              borderRadius: '5px' 
            }}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button 
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  disabled={loading || item.quantity <= 1}
                  style={{ padding: '5px 10px' }}
                >
                  -
                </button>
                <span>Quantity: {item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  disabled={loading}
                  style={{ padding: '5px 10px' }}
                >
                  +
                </button>
                <button 
                  onClick={() => removeFromCart(item.productId)}
                  disabled={loading}
                  style={{ 
                    padding: '5px 10px', 
                    backgroundColor: '#dc3545', 
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
      
      <div style={{ marginTop: '20px' }}>
        <h3>Test Add to Cart</h3>
        <button 
          onClick={() => addToCart(1, 1)}
          disabled={loading}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          Add Product 1
        </button>
        <button 
          onClick={() => addToCart(2, 1)}
          disabled={loading}
          style={{ padding: '10px 20px' }}
        >
          Add Product 2
        </button>
      </div>
    </div>
  );
};

export default SimpleCart;
