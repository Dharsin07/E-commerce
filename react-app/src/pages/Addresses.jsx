import React from 'react';
import { useNavigate } from 'react-router-dom';

const Addresses = () => {
  const navigate = useNavigate();
  let addrs = [];
  try { addrs = JSON.parse(localStorage.getItem('addresses') || '[]'); } catch (e) { addrs = []; }

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Saved Addresses</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {addrs.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>No saved addresses.</p>
        ) : (
          <ul style={{ marginTop: '1rem' }}>
            {addrs.map((a, idx) => (
              <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--medium-gray)' }}>
                <strong>{a.label || 'Address'}</strong>
                <div style={{ color: 'var(--text-gray)' }}>{a.line}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Addresses;
