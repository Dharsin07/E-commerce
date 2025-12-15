import React from 'react';

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="skeleton-text">
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        );
      case 'circle':
        return <div className="skeleton-circle"></div>;
      default:
        return <div className="skeleton-box"></div>;
    }
  };

  return (
    <div className="skeleton-container">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="skeleton-item">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
