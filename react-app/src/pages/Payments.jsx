import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const navigate = useNavigate();
  let cards = [];
  try { cards = JSON.parse(localStorage.getItem('payment_methods') || '[]'); } catch (e) { cards = []; }

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Payment Methods</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {cards.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>No saved payment methods.</p>
        ) : (
          <ul style={{ marginTop: '1rem' }}>
            {cards.map((c, idx) => (
              <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--medium-gray)' }}>
                <strong>{c.brand} •••• {c.last4}</strong>
                <div style={{ color: 'var(--text-gray)' }}>{c.expiry}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Payments;
