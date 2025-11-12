import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ORDERS_KEY = 'orders';

const TrackOrder = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [trackingId, setTrackingId] = useState('');
  const [currentOrder, setCurrentOrder] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      if (raw) {
        setOrders(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Error loading orders:', e);
    }
  }, []);

  const handleTrack = (e) => {
    e.preventDefault();
    setError('');
    setCurrentOrder(null);

    const order = orders.find(o => String(o.id) === String(trackingId));
    if (!order) {
      setError('Order not found. Please check your order ID.');
      return;
    }

    setCurrentOrder(order);
  };

  const getStepStatus = (step, order) => {
    const steps = {
      'Processing': 0,
      'Confirmed': 1,
      'Shipped': 2,
      'Out for Delivery': 3,
      'Delivered': 4
    };

    const currentStep = steps[order.status] || 0;
    const stepValue = steps[step];

    if (stepValue < currentStep) return 'completed';
    if (stepValue === currentStep) return 'current';
    return 'pending';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 className="section-title">Track Order</h2>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/orders')}
          >
            View All Orders
          </button>
        </div>

        <form onSubmit={handleTrack} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter your Order ID"
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--input-bg)',
                color: 'var(--text-primary)'
              }}
              required
            />
            <button type="submit" className="btn btn-primary">
              Track
            </button>
          </div>
        </form>

        {error && (
          <div style={{
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            background: 'var(--error-bg)',
            color: 'var(--error-text)'
          }}>
            {error}
          </div>
        )}

        {currentOrder && (
          <div className="order-tracking">
            <div style={{
              padding: '1.5rem',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Order #{currentOrder.id}</h3>
              <p><strong>Date:</strong> {formatDate(currentOrder.date)}</p>
              <p><strong>Status:</strong> {currentOrder.status}</p>
              <p><strong>Customer:</strong> {currentOrder.customerName}</p>
              <p><strong>Total:</strong> ${currentOrder.total.toFixed(2)}</p>
            </div>

            <div className="tracking-timeline" style={{
              position: 'relative',
              padding: '2rem 0'
            }}>
              {['Processing', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'].map((step, index) => {
                const status = getStepStatus(step, currentOrder);
                return (
                  <div
                    key={step}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: status === 'completed' ? 'var(--success-bg)' :
                                status === 'current' ? 'var(--primary-color)' :
                                'var(--border-color)',
                      marginRight: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: status === 'completed' ? 'var(--success-text)' :
                             status === 'current' ? 'white' :
                             'var(--text-secondary)',
                      border: '2px solid',
                      borderColor: status === 'completed' ? 'var(--success-text)' :
                                 status === 'current' ? 'var(--primary-color)' :
                                 'var(--border-color)'
                    }}>
                      {status === 'completed' ? '✓' : index + 1}
                    </div>
                    <div>
                      <div style={{
                        fontWeight: status === 'current' ? 'bold' : 'normal',
                        color: status === 'pending' ? 'var(--text-secondary)' : 'var(--text-primary)'
                      }}>
                        {step}
                      </div>
                      {status === 'current' && (
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                          {step === 'Processing' ? 'Order is being processed' :
                           step === 'Confirmed' ? 'Order has been confirmed' :
                           step === 'Shipped' ? 'Package is on its way' :
                           step === 'Out for Delivery' ? 'Package will be delivered today' :
                           'Package has been delivered'}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {currentOrder.items && (
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                borderRadius: '8px',
                background: 'var(--bg-secondary)'
              }}>
                <h4 style={{ marginBottom: '1rem' }}>Order Items</h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {currentOrder.items.map(item => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem',
                      borderBottom: '1px solid var(--border-color)'
                    }}>
                      <div style={{ flex: 1 }}>{item.name}</div>
                      <div style={{ marginLeft: '1rem' }}>Qty: {item.quantity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
