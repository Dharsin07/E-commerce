import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  return (
    <motion.div
      className="loading-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="spinner-ring"></div>
          <div className="spinner-center">
            <span className="spinner-logo">L</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
