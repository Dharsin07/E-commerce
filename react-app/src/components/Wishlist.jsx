import React from 'react';
import { formatPrice } from '../utils/helpers';
import { toast } from 'react-toastify';

const Wishlist = ({ isOpen, wishlist, onClose, onRemove, onAddToCart, onMoveAllToCart, onFly }) => {
  // using react-toastify for notifications

  const handleMoveToCart = (productId) => {
    try {
      // try to find the image element for this wishlist item to animate
      const img = document.querySelector(`.wishlist-item img[src*="${productId}"]`) || document.querySelector('.wishlist-item img');
      const rect = img?.getBoundingClientRect();
      typeof onFly === 'function' && onFly({ src: img?.src || '', startRect: rect, target: 'cart' });
    } catch (err) {}
    onAddToCart(productId);
    onRemove(productId);
  };

  const handleMoveAllToCart = () => {
    const itemCount = wishlist.length;
    wishlist.forEach(item => {
      try { const img = document.querySelector(`img[src*="${item.image}"]`) || document.querySelector('.wishlist-item img'); const rect = img?.getBoundingClientRect(); typeof onFly === 'function' && onFly({ src: item.image, startRect: rect, target: 'cart' }); } catch (err) {}
      onAddToCart(item.id, 1, false); // Pass false to suppress individual notifications
    });
    onMoveAllToCart();
    toast.success(`${itemCount} ${itemCount === 1 ? 'item' : 'items'} moved to cart successfully!`);
  };

  return (
    <div className={`wishlist-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="wishlist-header">
        <h3>My Wishlist</h3>
        <button className="modal-close" onClick={onClose} aria-label="Close wishlist">
          ✕
        </button>
      </div>

      <div className="wishlist-items">
        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <div className="wishlist-empty-icon">❤️</div>
            <h3>Your wishlist is empty</h3>
            <p>Add items you love to your wishlist</p>
            <button className="btn" onClick={onClose}>
              <span className="btn-text">Start Shopping</span>
            </button>
          </div>
        ) : (
          <>
            <div className="wishlist-actions">
              <button className="btn btn-secondary" onClick={handleMoveAllToCart}>
                Move All to Cart
              </button>
            </div>
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <div className="wishlist-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="wishlist-item-info">
                  <h4>{item.name}</h4>
                  <div className="wishlist-item-price">{formatPrice(item.price)}</div>
                  <div className="wishlist-item-actions">
                    <button 
                      className="btn btn-sm" 
                      onClick={() => handleMoveToCart(item.id)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => onRemove(item.id)}
                      aria-label="Remove from wishlist"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;