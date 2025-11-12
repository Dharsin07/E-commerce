import React, { useState } from 'react';
import { generateStars } from '../utils/helpers';
import { toast } from 'react-toastify';

const Reviews = ({ reviews, onAddReview }) => {
  // use react-toastify for notifications
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    text: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.name || !newReview.email || !newReview.text) {
      toast.error('Please fill all fields');
      return;
    }

    const review = {
      ...newReview,
      initials: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      date: new Date().toISOString()
    };

  onAddReview(review);
  toast.success('Thank you for your review!');
    setNewReview({ name: '', email: '', rating: 5, text: '' });
    setShowForm(false);
  };

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Testimonials from satisfied customers who chose Luxe for their homes
          </p>
          <button 
            className="btn btn-secondary" 
            onClick={() => setShowForm(!showForm)}
            style={{ marginTop: '1rem' }}
          >
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="review-form-container fade-in">
            <form className="review-form" onSubmit={handleSubmit}>
              <h3>Share Your Experience</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input 
                    type="text" 
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    value={newReview.email}
                    onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="rating-input">
                  {[5, 4, 3, 2, 1].map(star => (
                    <label key={star} className="star-label">
                      <input 
                        type="radio" 
                        name="rating"
                        value={star}
                        checked={newReview.rating === star}
                        onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                      />
                      <span className="star">{star}★</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Your Review *</label>
                <textarea 
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  rows="4"
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <button type="submit" className="btn">Submit Review</button>
            </form>
          </div>
        )}
        
        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card fade-in">
              <div className="review-header">
                <div className="reviewer-avatar">{review.initials}</div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <div className="review-rating">{generateStars(review.rating)}</div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              {review.date && (
                <p className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;