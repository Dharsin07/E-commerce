import React from 'react';
import { formatPrice, generateStars } from '../utils/helpers';

const ProductModal = ({ isOpen, product, wishlist, onClose, onAddToCart, onToggleWishlist, onFly }) => {
  if (!isOpen || !product) return null;

  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div 
      className="modal active" 
      onClick={handleBackdropClick}
      role="dialog" 
      aria-hidden="false"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        
        <div style={{ marginBottom: '2rem' }}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }}
          />
          
          <div className="product-category">{product.category.replace('-', ' ')}</div>
          <h2 style={{ marginBottom: '1rem' }}>{product.name}</h2>
          
          <div className="product-rating" style={{ marginBottom: '1rem' }}>
            <span className="stars">{generateStars(product.rating)}</span>
            <span className="rating-count">({product.reviews} reviews)</span>
          </div>
          
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: 'var(--gold)', 
            marginBottom: '1rem' 
          }}>
            {formatPrice(product.price)}
          </div>
          
          <p style={{ marginBottom: '2rem', lineHeight: 1.6 }}>{product.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button 
              className="btn" 
              onClick={(e) => { 
                try {
                  const img = document.querySelector('.modal-content img');
                  const rect = img?.getBoundingClientRect();
                  typeof onFly === 'function' && onFly({ src: product.images[0], startRect: rect, target: 'cart' });
                } catch (err) {}
                onAddToCart(product.id); 
                onClose(); 
              }}
            >
              Add to Cart
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={(e) => {
                try {
                  const img = document.querySelector('.modal-content img');
                  const rect = img?.getBoundingClientRect();
                  typeof onFly === 'function' && onFly({ src: product.images[0], startRect: rect, target: 'wishlist' });
                } catch (err) {}
                onToggleWishlist(product.id);
              }}
            >
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--medium-gray)', 
            fontSize: '0.9rem', 
            color: 'var(--text-gray)' 
          }}>
            <p><strong>SKU:</strong> LUX-{product.id.toString().padStart(4, '0')}</p>
            <p><strong>Category:</strong> {product.category.replace('-', ' ')}</p>
            <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;