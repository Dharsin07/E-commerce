import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  let items = [];
  try { items = JSON.parse(localStorage.getItem('cart_items') || '[]'); } catch (e) { items = []; }

  const total = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">My Cart</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {items.length === 0 ? (
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ marginTop: '1rem' }}>
              {items.map(i => (
                <li key={i.productId || i.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--medium-gray)' }}>
                  <strong>{i.name}</strong> — {i.quantity} × {i.price}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1rem' }}>
              <strong>Total: </strong>{`$${total.toFixed(2)}`}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
