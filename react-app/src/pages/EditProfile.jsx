import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'profile_info';

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    avatar: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setFormData(prev => ({
          ...prev,
          ...data
        }));
      }
    } catch (e) { 
      console.error('Error loading profile:', e);
      setMessage('Error loading profile data');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Validate fields
      if (!formData.name.trim() || !formData.email.trim()) {
        throw new Error('Name and email are required');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        updatedAt: new Date().toISOString()
      }));

      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Edit Profile</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        {message && (
          <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: message.includes('successfully') ? '#d4edda' : '#f8d7da', color: message.includes('successfully') ? '#155724' : '#721c24', borderRadius: '4px' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSave} style={{ marginTop: '1rem', maxWidth: 600 }}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} className="search-input" />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Email
            <input name="email" value={formData.email} onChange={handleChange} className="search-input" />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Phone
            <input name="phone" value={formData.phone} onChange={handleChange} className="search-input" />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Address
            <input name="address" value={formData.address} onChange={handleChange} className="search-input" />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            City
            <input name="city" value={formData.city} onChange={handleChange} className="search-input" />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Country
            <input name="country" value={formData.country} onChange={handleChange} className="search-input" />
          </label>

          <div style={{ marginTop: '1rem' }}>
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
