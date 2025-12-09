import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from '../components/Products';

// Home page - shows hero, collections and a featured product list
const Home = ({
  filteredProducts,
  wishlist,
  onAddToCart,
  onToggleWishlist,
  onOpenModal,
  filters,
  onFilterChange,
  onViewCollection,
  onWriteReview,
  reviewsByProduct,
  onFly
}) => {
  // Clear filters when navigating to Home to ensure all products are displayed
  // Use ref to prevent infinite re-renders
  const hasClearedFilters = useRef(false);

  useEffect(() => {
    if (!hasClearedFilters.current) {
      onFilterChange('category', '');
      onFilterChange('price', '');
      onFilterChange('sort', 'featured');
      hasClearedFilters.current = true;
    }
  }, []); // Empty dependency array - only run once on mount
  return (
    <main>
      <Hero />
      <Collections onFilterProducts={(category) => onFilterChange('category', category)} />
      <Products
        products={filteredProducts}
        wishlist={wishlist}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onOpenModal={onOpenModal}
        filters={filters}
        onFilterChange={onFilterChange}
        onViewCollection={onViewCollection}
        onWriteReview={onWriteReview}
        reviewsByProduct={reviewsByProduct}
        onFly={onFly}
      />
    </main>
  );
};

export default Home;
