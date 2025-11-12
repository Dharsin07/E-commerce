import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate();
  let history = [];
  try { history = JSON.parse(localStorage.getItem('orders') || '[]'); } catch (e) { history = []; }

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Order History</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {history.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>No past orders.</p>
        ) : (
          <ul style={{ marginTop: '1rem' }}>
            {history.map(o => (
              <li key={o.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--medium-gray)' }}>
                <strong>Order #{o.id}</strong> — {o.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
