import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentlyViewed = () => {
  const navigate = useNavigate();
  let items = [];
  try { items = JSON.parse(localStorage.getItem('recently_viewed') || '[]'); } catch (e) { items = []; }

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Recently Viewed</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {items.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>No recently viewed products.</p>
        ) : (
          <ul style={{ marginTop: '1rem' }}>
            {items.map(i => (
              <li key={i.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--medium-gray)' }}>
                <strong>{i.name}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecentlyViewed;
