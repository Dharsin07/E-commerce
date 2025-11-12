import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';

const STORAGE_KEY = 'product_reviews';

const ReviewPage = () => {
  const [productId, setProductId] = useState(String(productsData[0]?.id || ''));
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [reviewsMap, setReviewsMap] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setReviewsMap(raw ? JSON.parse(raw) : {});
    } catch (e) {
      console.error('Failed to read reviews', e);
      setReviewsMap({});
    }
  }, []);

  const saveToStorage = (map) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
      setReviewsMap(map);
    } catch (e) {
      console.error('Failed to save reviews', e);
    }
  };

  useEffect(() => {
    if (!productId && productsData[0]) setProductId(String(productsData[0].id));
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return toast.error('Please provide name and review');

    try {
      const map = { ...reviewsMap };
      const key = String(productId);
      const arr = Array.isArray(map[key]) ? map[key] : [];
      const nextArr = [...arr, { id: Date.now(), name: name.trim(), rating, text: text.trim(), date: new Date().toISOString() }];
      const next = { ...map, [key]: nextArr };
      saveToStorage(next);
      // reset form
      setName(''); setText(''); setRating(5);
      toast.success('Thank you — your review has been saved.');
    } catch (err) {
      console.error(err);
      toast.error('Failed to save review');
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="section-title">Write a Review</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: 720, marginTop: '1rem' }}>
          <label>
            Product
            <select value={productId} onChange={e => setProductId(String(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '0.5rem' }}>
              {productsData.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Your Name
            <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '0.5rem' }} />
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Rating
            <select value={rating} onChange={e => setRating(Number(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '0.5rem' }}>
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
            </select>
          </label>

          <label style={{ marginTop: '0.75rem', display: 'block' }}>
            Review
            <textarea value={text} onChange={e => setText(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '0.5rem', minHeight: 120 }} />
          </label>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            <button className="btn" type="submit">Submit Review</button>
            <button type="button" className="btn outline" onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>

        <div style={{ marginTop: '2rem' }}>
          <h3>Submitted Reviews</h3>
          {Object.keys(reviewsMap).length === 0 && (
            <p style={{ color: 'var(--text-gray)' }}>No reviews yet — be the first to share your experience.</p>
          )}

          {Object.entries(reviewsMap).map(([pid, arr]) => (
            <div key={pid} style={{ marginTop: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>{productsData.find(p => String(p.id) === String(pid))?.name || 'Product'}</h4>
              {arr.map(r => (
                <div key={r.id} className="review-card" style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{r.name}</strong>
                    <span style={{ color: 'var(--text-gray)' }}>{new Date(r.date).toLocaleString()}</span>
                  </div>
                  <div style={{ color: 'var(--gold)' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                  <p style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>{r.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
