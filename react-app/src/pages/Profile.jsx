import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const PROFILE_KEY = 'profile_info';
const ORDERS_KEY = 'orders';
const WISHLIST_KEY = 'wishlist_items';
const ADDRESSES_KEY = 'delivery_addresses';

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    try {
      // Load profile
      const rawProfile = localStorage.getItem(PROFILE_KEY);
      if (rawProfile) setProfile(JSON.parse(rawProfile));

      // Load orders
      const rawOrders = localStorage.getItem(ORDERS_KEY);
      if (rawOrders) setOrders(JSON.parse(rawOrders));

      // Load wishlist
      const rawWishlist = localStorage.getItem(WISHLIST_KEY);
      if (rawWishlist) setWishlist(JSON.parse(rawWishlist));

      // Load addresses
      const rawAddresses = localStorage.getItem(ADDRESSES_KEY);
      if (rawAddresses) setAddresses(JSON.parse(rawAddresses));
    } catch (e) {
      console.error('Error loading profile data:', e);
    }
  }, []);

  const getOrderStats = () => {
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'Processing').length,
      delivered: orders.filter(o => o.status === 'Delivered').length
    };
  };

  const orderStats = getOrderStats();

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">My Profile</h2>
          <div>
            <Link to="/edit-profile" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Edit Profile
            </Link>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              Back Home
            </button>
          </div>
        </div>

        <div className="profile-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Personal Info Card */}
          <div className="profile-card" style={{ 
            padding: '1.5rem',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Personal Information</h3>
            <p><strong>Name:</strong> {profile.name || '—'}</p>
            <p><strong>Email:</strong> {profile.email || '—'}</p>
            <p><strong>Saved Addresses:</strong> {addresses.length}</p>
            <p><strong>Wishlist Items:</strong> {wishlist.length}</p>
          </div>

          {/* Order Summary Card */}
          <div className="profile-card" style={{ 
            padding: '1.5rem',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Order Summary</h3>
            <p><strong>Total Orders:</strong> {orderStats.total}</p>
            <p><strong>Pending:</strong> {orderStats.pending}</p>
            <p><strong>Delivered:</strong> {orderStats.delivered}</p>
            {orders.length > 0 && (
              <p style={{ marginTop: '1rem' }}>
                <strong>Last Order:</strong> {new Date(orders[orders.length - 1].date).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="profile-actions" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <Link to="/orders" className="quick-action" style={{
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            📦 My Orders
          </Link>
          <Link to="/wishlist" className="quick-action" style={{
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            ❤️ Wishlist
          </Link>
          <Link to="/addresses" className="quick-action" style={{
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            📍 Addresses
          </Link>
          <Link to="/returns" className="quick-action" style={{
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '8px',
            background: 'var(--bg-secondary)',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            ↩️ Returns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
