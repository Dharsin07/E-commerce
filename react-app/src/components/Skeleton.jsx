import React from 'react';
import './Skeleton.css';

const Skeleton = ({
  variant = 'text',
  width,
  height,
  className = '',
  style = {}
}) => {
  const skeletonStyle = {
    width: width || (variant === 'text' ? '100%' : variant === 'circle' ? '40px' : 'auto'),
    height: height || (variant === 'text' ? '16px' : variant === 'circle' ? '40px' : 'auto'),
    ...style
  };

  return (
    <div
      className={`skeleton skeleton-${variant} ${className}`}
      style={skeletonStyle}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
