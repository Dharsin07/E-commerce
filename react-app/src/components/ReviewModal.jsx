import React, { useState, useEffect } from 'react';

const ReviewModal = ({ product, isOpen, onClose, onSubmit, initial = {} }) => {
  const [name, setName] = useState(initial.name || '');
  const [text, setText] = useState(initial.text || '');

  useEffect(() => {
    if (isOpen) {
      setName(initial.name || '');
      setText(initial.text || '');
    }
  }, [isOpen, initial]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onSubmit({ name: name.trim(), text: text.trim(), date: new Date().toISOString() });
    setName('');
    setText('');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Write a review for {product.name}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Review
            <textarea value={text} onChange={e => setText(e.target.value)} />
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button type="submit" className="btn">Submit</button>
            <button type="button" className="btn outline" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
