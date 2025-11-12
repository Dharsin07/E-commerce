import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

// Renders an image that animates from a start rect to a target DOM element (selector)
const FlyToIcon = ({ id, src, startRect, targetSelector, onComplete }) => {
  const [destRect, setDestRect] = useState(null);
  useEffect(() => {
    const el = document.querySelector(targetSelector);
    if (el) {
      setDestRect(el.getBoundingClientRect());
    } else {
      // try to fallback to first .nav-icon
      const fallback = document.querySelector('.nav-icon');
      if (fallback) setDestRect(fallback.getBoundingClientRect());
    }
  }, [targetSelector]);

  if (!startRect) return null;

  const root = document.body;
  const startLeft = startRect.left;
  const startTop = startRect.top;
  const startW = startRect.width;
  const startH = startRect.height;

  // destination center (if available)
  const destLeft = destRect ? (destRect.left + destRect.width / 2 - startW / 2) : startLeft + 20;
  const destTop = destRect ? (destRect.top + destRect.height / 2 - startH / 2) : startTop - 20;

  return createPortal(
    <motion.div
      style={{
        position: 'fixed',
        left: startLeft,
        top: startTop,
        width: startW,
        height: startH,
        zIndex: 3000,
        pointerEvents: 'none',
        borderRadius: 8,
        overflow: 'hidden',
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x: destLeft - startLeft, y: destTop - startTop, opacity: 0.15, scale: 0.35 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        // slight delay to allow fade
        setTimeout(() => onComplete && onComplete(id), 10);
      }}
    >
      <img src={src} alt="flying" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </motion.div>
  , root);
};

export default FlyToIcon;
