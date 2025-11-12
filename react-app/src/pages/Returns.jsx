import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ORDERS_KEY = 'orders';
const RETURNS_KEY = 'returns';

const Returns = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [returns, setReturns] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState('');
  const [reason, setReason] = useState('');
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      // Load orders
      const rawOrders = localStorage.getItem(ORDERS_KEY);
      if (rawOrders) {
        const parsedOrders = JSON.parse(rawOrders);
        // Only show delivered orders from last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        setOrders(parsedOrders.filter(order => 
          order.status === 'Delivered' && 
          new Date(order.date) > thirtyDaysAgo
        ));
      }

      // Load existing returns
      const rawReturns = localStorage.getItem(RETURNS_KEY);
      if (rawReturns) {
        setReturns(JSON.parse(rawReturns));
      }
    } catch (e) {
      console.error('Error loading data:', e);
    }
  }, []);

  const handleOrderSelect = (e) => {
    const orderId = e.target.value;
    setSelectedOrder(orderId);
    if (orderId) {
      const order = orders.find(o => String(o.id) === String(orderId));
      if (order) {
        setItems(order.items.map(item => ({
          ...item,
          selected: false,
          reason: ''
        })));
      }
    } else {
      setItems([]);
    }
  };

  const handleItemToggle = (itemId) => {
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, selected: !item.selected } : item
    ));
  };

  const handleItemReason = (itemId, value) => {
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, reason: value } : item
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate selection
    const selectedItems = items.filter(item => item.selected);
    if (selectedItems.length === 0) {
      setMessage('Please select at least one item to return');
      return;
    }

    // Validate reasons
    if (selectedItems.some(item => !item.reason)) {
      setMessage('Please provide a reason for each selected item');
      return;
    }

    try {
      const returnRequest = {
        id: Date.now(),
        orderId: selectedOrder,
        date: new Date().toISOString(),
        status: 'Pending',
        items: selectedItems,
        reason
      };

      // Save return request
      const updatedReturns = [...returns, returnRequest];
      localStorage.setItem(RETURNS_KEY, JSON.stringify(updatedReturns));
      setReturns(updatedReturns);

      // Clear form
      setSelectedOrder('');
      setReason('');
      setItems([]);
      setMessage('Return request submitted successfully');

      // Refresh orders to update status
      const updatedOrders = orders.map(order => 
        String(order.id) === String(selectedOrder)
          ? { ...order, hasReturn: true }
          : order
      );
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
      setOrders(updatedOrders);

    } catch (e) {
      console.error('Error submitting return:', e);
      setMessage('Error submitting return request');
    }
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
          <h2 className="section-title">Returns & Refunds</h2>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/orders')}
          >
            View Orders
          </button>
        </div>

        {message && (
          <div style={{
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            background: message.includes('Error')
              ? 'var(--error-bg)'
              : message.includes('success')
                ? 'var(--success-bg)'
                : 'var(--warning-bg)',
            color: message.includes('Error')
              ? 'var(--error-text)'
              : message.includes('success')
                ? 'var(--success-text)'
                : 'var(--warning-text)'
          }}>
            {message}
          </div>
        )}

        {/* Return Request Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="order" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Select Order *
            </label>
            <select
              id="order"
              value={selectedOrder}
              onChange={handleOrderSelect}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--input-bg)',
                color: 'var(--text-primary)'
              }}
              required
            >
              <option value="">Select an order...</option>
              {orders.map(order => (
                <option key={order.id} value={order.id} disabled={order.hasReturn}>
                  Order #{order.id} - {formatDate(order.date)}
                  {order.hasReturn ? ' (Return Requested)' : ''}
                </option>
              ))}
            </select>
          </div>

          {selectedOrder && (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Select Items to Return</h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {items.map(item => (
                    <div key={item.id} style={{
                      padding: '1rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-secondary)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <input
                          type="checkbox"
                          id={`item-${item.id}`}
                          checked={item.selected}
                          onChange={() => handleItemToggle(item.id)}
                          style={{ marginRight: '0.5rem' }}
                        />
                        <label htmlFor={`item-${item.id}`}>
                          {item.name} (Qty: {item.quantity})
                        </label>
                      </div>
                      {item.selected && (
                        <select
                          value={item.reason}
                          onChange={(e) => handleItemReason(item.id, e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginTop: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            background: 'var(--input-bg)',
                            color: 'var(--text-primary)'
                          }}
                          required
                        >
                          <option value="">Select reason for return...</option>
                          <option value="wrong-size">Wrong Size</option>
                          <option value="defective">Defective Item</option>
                          <option value="not-as-described">Not as Described</option>
                          <option value="changed-mind">Changed Mind</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Additional Comments
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    minHeight: '100px'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Return Request
              </button>
            </>
          )}
        </form>

        {/* Previous Returns */}
        {returns.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Previous Returns</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {returns.map(ret => (
                <div key={ret.id} style={{
                  padding: '1rem',
                  borderRadius: '4px',
                  background: 'var(--bg-secondary)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <strong>Return #{ret.id}</strong>
                      <span style={{ margin: '0 0.5rem' }}>•</span>
                      <span>Order #{ret.orderId}</span>
                    </div>
                    <div style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      background: ret.status === 'Approved' ? 'var(--success-bg)' :
                                ret.status === 'Rejected' ? 'var(--error-bg)' :
                                'var(--warning-bg)',
                      color: ret.status === 'Approved' ? 'var(--success-text)' :
                             ret.status === 'Rejected' ? 'var(--error-text)' :
                             'var(--warning-text)',
                      fontSize: '0.875rem'
                    }}>
                      {ret.status}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Submitted on {formatDate(ret.date)}
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    {ret.items.map(item => (
                      <div key={item.id} style={{ fontSize: '0.875rem' }}>
                        • {item.name} - {item.reason.replace('-', ' ')}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Returns;
