import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from '../components/Products';

// CollectionPage: robust filtering that updates when route param or products change.
const CollectionPage = ({ products = [], wishlist = [], onAddToCart, onToggleWishlist, onOpenModal, onFly }) => {
  const { type } = useParams();
  const navigate = useNavigate();

  // Normalize category from URL param (defensive: decode + lower)
  const categoryParam = String(type || '').toLowerCase();
  const category = decodeURIComponent(categoryParam || '');

  // Local UI state
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortBy, setSortBy] = useState('featured');
  const [collectionProducts, setCollectionProducts] = useState([]);

  // When products or route param changes, compute the collection products immediately.
  useEffect(() => {
    const normalized = products.filter(p => String(p.category || '').toLowerCase() === category);
    setCollectionProducts(normalized);
    // reset UI when switching collections
    setSearchTerm('');
    setVisibleCount(12);
    setSortBy('featured');
  }, [products, category]);

  // Derived filtered & sorted list
  const filtered = useMemo(() => {
    const term = String(searchTerm || '').trim().toLowerCase();
    let list = collectionProducts.slice();
    if (term) {
      list = list.filter(p => (
        (p.name || '').toLowerCase().includes(term) ||
        (p.description || '').toLowerCase().includes(term) ||
        (p.category || '').toLowerCase().includes(term)
      ));
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        break;
      case 'rating':
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'featured':
      default:
        list.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (b.rating || 0) - (a.rating || 0);
        });
        break;
    }

    return list;
  }, [collectionProducts, searchTerm, sortBy]);

  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="section-title">{(category || '').replace('-', ' ')}</h2>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Back Home</button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
          <input
            aria-label="Search collection"
            placeholder={`Search ${String(category || '').replace('-', ' ')}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select aria-label="Sort collection" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <Products
          products={visibleProducts}
          wishlist={wishlist}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          onOpenModal={onOpenModal}
          filters={{ search: searchTerm, category }}
          onFilterChange={() => {}}
          onFly={onFly}
        />

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          {visibleCount < filtered.length ? (
            <button className="btn" onClick={() => setVisibleCount(c => Math.min(filtered.length, c + 20))}>See More</button>
          ) : (
            filtered.length > 12 && (
              <button className="btn outline" onClick={() => setVisibleCount(12)}>See Less</button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
