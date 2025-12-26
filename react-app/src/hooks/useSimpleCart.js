import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api';

export const useSimpleCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('firebaseToken');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      };
      
      const response = await fetch(`${API_BASE}/cart`, { headers });
      const result = await response.json();
      if (result.success) {
        setCart(result.data.items || []);
      } else {
        console.error('Cart fetch failed:', result.error);
        setCart([]);
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
      setCart([]);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('firebaseToken');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      };
      
      const response = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ productId, quantity })
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart
        return { success: true };
      } else {
        console.error('Add to cart failed:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return { success: false, error: 'Quantity must be at least 1' };
    
    setLoading(true);
    try {
      const token = localStorage.getItem('firebaseToken');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      };
      
      const response = await fetch(`${API_BASE}/cart/${productId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ quantity: newQuantity })
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart
        return { success: true };
      } else {
        console.error('Update quantity failed:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Update quantity error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('firebaseToken');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      };
      
      const response = await fetch(`${API_BASE}/cart/${productId}`, {
        method: 'DELETE',
        headers
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart
        return { success: true };
      } else {
        console.error('Remove from cart failed:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Remove from cart error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('firebaseToken');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      };
      
      const response = await fetch(`${API_BASE}/cart`, {
        method: 'DELETE',
        headers
      });
      const result = await response.json();
      if (result.success) {
        await fetchCart(); // Refresh cart
        return { success: true };
      } else {
        console.error('Clear cart failed:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Clear cart error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    refetchCart: fetchCart
  };
};
