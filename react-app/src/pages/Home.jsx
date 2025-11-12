import React, { useEffect } from 'react';
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
  useEffect(() => {
    onFilterChange('category', '');
    onFilterChange('price', '');
    onFilterChange('sort', 'featured');
  }, [onFilterChange]);
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
