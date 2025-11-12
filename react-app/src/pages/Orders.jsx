import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../utils/helpers';

const Orders = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      try {
        const userOrders = JSON.parse(localStorage.getItem(`orders_${user.email}`) || '[]');
        setOrders(userOrders);
      } catch (e) {
        console.error('Failed to load orders', e);
        setOrders([]);
      }
    } else {
      setOrders([]);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title">My Orders</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
          </div>
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>Please log in to view your orders.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">My Orders</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {orders.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>You have no orders yet.</p>
        ) : (
          <div className="orders-list" style={{ marginTop: '1rem' }}>
            {orders.map(order => (
              <div key={order.id} className="card" style={{ marginBottom: '1rem', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3>Order #{order.id}</h3>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>
                <p style={{ color: 'var(--text-gray)', marginBottom: '0.5rem' }}>
                  {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}
                </p>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Items:</strong>
                  <ul style={{ marginTop: '0.25rem' }}>
                    {order.items.map(item => (
                      <li key={item.productId} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{item.name} (x{item.quantity})</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Total: {formatPrice(order.total)}</strong>
                  <button className="btn btn-sm btn-primary" onClick={() => navigate(`/track-order?id=${order.id}`)}>
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
