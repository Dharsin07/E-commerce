import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FlyToIcon from './components/FlyToIcon';
import { useTheme } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';
import { productsData } from './data/productsData';
import { scrollToSection } from './utils/helpers';
// Legacy NotificationContext removed in favor of react-toastify to avoid duplicate toasts
import { useSearch } from './hooks/useSearch';

// Components
import Header from './components/Header';
import Shop from './pages/Shop';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import ReviewPage from './pages/ReviewPage';
// account & shopping pages
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Orders from './pages/Orders';
import WishlistPage from './pages/WishlistPage';
import Addresses from './pages/Addresses';
import Payments from './pages/Payments';
import RecentlyViewed from './pages/RecentlyViewed';
import CartPage from './pages/CartPage';
import TrackOrder from './pages/TrackOrder';
import Returns from './pages/Returns';
import OrderHistory from './pages/OrderHistory';
import Login from './pages/Login';
import Signup from './pages/Signup';

import ReviewModal from './components/ReviewModal';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
// Notification (legacy) removed; using react-toastify toasts instead
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // notifications are now shown using react-toastify (toast.*).
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { user, isAuthenticated } = useAuth();

  // Fly animation items
  const [flyItems, setFlyItems] = React.useState([]);

  const handleFly = ({ src, startRect, target }) => {
    if (!startRect || !src) return;
    const id = `${Date.now()}-${Math.random()}`;
    // Normalize target selector
    const selector = target === 'wishlist' ? 'button.nav-icon[data-target="wishlist"]' : 'button.nav-icon[data-target="cart"]';
    setFlyItems(prev => [...prev, { id, src, startRect, selector }]);
  };

  // State Management
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart_items') || '[]'); } catch (e) { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('wishlist_items') || '[]'); } catch (e) { return []; }
  });
  // legacy sample reviews removed — reviews are persisted per-product via localStorage
  const [reviewsByProduct, setReviewsByProduct] = useState({});
  const [orders, setOrders] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewingProduct, setReviewingProduct] = useState(null);
  // Use the useSearch hook for dynamic filtering (use current `products` state)
  const {
    searchTerm,
    handleSearchChange,
    filters,
    updateFilter,
    sortBy,
    setSortBy,
    filteredData: filteredProducts,
    clearFilters,
  } = useSearch(products, ['name', 'category', 'description']);

  // Navbar search is controlled by useSearch hook; no local nav state needed here.

  // Initialize animations on mount
  useEffect(() => {
    initializeAnimations();
  }, []);

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('product_reviews');
      if (raw) {
        setReviewsByProduct(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Failed to load reviews', e);
    }
  }, []);

  // Load cart/wishlist/orders from localStorage on mount
  useEffect(() => {
    try {
      const rawCart = localStorage.getItem('cart_items');
      if (rawCart) setCart(JSON.parse(rawCart));
      const rawWishlist = localStorage.getItem('wishlist_items');
      if (rawWishlist) setWishlist(JSON.parse(rawWishlist));
      // Orders loading moved to separate useEffect
    } catch (e) {
      console.error('Failed to load stored state', e);
    }
  }, []);

  // Load orders based on user
  useEffect(() => {
    try {
      if (user) {
        if (user.role === 'admin') {
          const allUsers = JSON.parse(localStorage.getItem('luxe-users') || '[]');
          const allOrders = [];
          allUsers.forEach(u => {
            const userOrders = JSON.parse(localStorage.getItem(`orders_${u.email}`) || '[]');
            allOrders.push(...userOrders);
          });
          setOrders(allOrders);
        } else {
          const userOrders = JSON.parse(localStorage.getItem(`orders_${user.email}`) || '[]');
          setOrders(userOrders);
        }
      } else {
        setOrders([]);
      }
    } catch (e) {
      console.error('Failed to load orders', e);
      setOrders([]);
    }
  }, [user]);

  // Handle body overflow
  useEffect(() => {
    if (isCartOpen || isWishlistOpen || isCheckoutOpen || isAdminOpen || modalProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen, isWishlistOpen, isCheckoutOpen, isAdminOpen, modalProduct]);

  // Initialize scroll animations
  const initializeAnimations = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };

  // filteredProducts is now provided by useSearch hook

  // Cart functions
  const addToCart = (productId, quantity = 1) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === productId);
      let next;
      if (existingItem) {
        next = prevCart.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        next = [...prevCart, {
          productId: productId,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: quantity
        }];
      }
      try { localStorage.setItem('cart_items', JSON.stringify(next)); } catch (e) {}
      return next;
    });

    toast.success(`🛒 ${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
    toast.info('Item removed from cart');
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Wishlist functions
  const toggleWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    setWishlist(prevWishlist => {
      const existingIndex = prevWishlist.findIndex(item => item.id === productId);
      if (existingIndex > -1) {
  toast.info(`💔 ${product.name} removed from wishlist`);
        const next = prevWishlist.filter(item => item.id !== productId);
        try { localStorage.setItem('wishlist_items', JSON.stringify(next)); } catch (e) {}
        return next;
      } else {
  toast.success(`❤️ ${product.name} added to wishlist!`);
        const next = [...prevWishlist, {
          id: productId,
          name: product.name,
          price: product.price,
          image: product.images[0]
        }];
        try { localStorage.setItem('wishlist_items', JSON.stringify(next)); } catch (e) {}
        return next;
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const moveAllToCart = () => {
    setWishlist([]);
  };

  // Filter functions - delegate to useSearch hook
  const handleFilterChange = (filterType, value) => {
    if (filterType === 'search') {
      const trimmed = String(value ?? '').trim();
      handleSearchChange(trimmed);
      if (trimmed === '') {
        // ensure full list and default sort restore immediately
        clearFilters();
        setSortBy('featured');
      }
    } else if (filterType === 'sort') {
      setSortBy(value);
    } else {
      updateFilter(filterType, value);
    }
  };

  // Create filters object for Products component
  const filtersForProducts = {
    search: searchTerm,
    category: filters.category || '',
    price: filters.price || '',
    sort: sortBy || 'featured'
  };

  const saveReviewsToStorage = (map) => {
    try {
      localStorage.setItem('product_reviews', JSON.stringify(map));
    } catch (e) {
      console.error('Failed to save reviews', e);
    }
  };


  const handleSubmitReview = (productId, review) => {
    try {
      const raw = localStorage.getItem('product_reviews');
      const prev = raw ? JSON.parse(raw) : {};
      const next = { ...prev, [productId]: [...(prev[productId] || []), review] };
      saveReviewsToStorage(next);
    } catch (e) {
      console.error('Failed to save review', e);
    }
    setReviewModalOpen(false);
    setReviewingProduct(null);
  };

  // (collection navigation and review-writing flow handled via routes/pages)

  // Navigation functions
  const handleWishlistToggle = () => {
    setIsWishlistOpen(prev => !prev);
  };

  const handleSubscribe = (email) => {
    toast.success('Thank you for subscribing to our newsletter!');
  };

  const handleViewCollection = (category) => {
    navigate(`/collection/${category}`);
  };

  const handleWriteReview = (product) => {
    navigate('/review');
  };

  // Modal functions
  const openProductModal = (productId) => {
    const product = products.find(p => p.id === productId);
    setModalProduct(product);
    // persist recently viewed
    try {
      const raw = localStorage.getItem('recently_viewed');
      const arr = raw ? JSON.parse(raw) : [];
      const exists = arr.find(i => String(i.id) === String(productId));
      const entry = { id: productId, name: product?.name || '' };
      const next = exists ? arr : [entry, ...arr].slice(0, 30);
      localStorage.setItem('recently_viewed', JSON.stringify(next));
    } catch (e) {}
  };

  const closeProductModal = () => {
    setModalProduct(null);
  };

  // Cart functions
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    scrollToSection('products');
  };

  // Checkout functions
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    if (!user) {
      toast.error('Please log in to proceed to checkout');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCompleteOrder = (orderData) => {
    if (!user) {
      toast.error('Please log in to place an order');
      return;
    }

    const order = {
      id: Date.now(),
      customerName: `${orderData.firstName} ${orderData.lastName}`,
      customerEmail: user.email,
      items: [...cart],
      total: cartTotal * 1.1,
      date: new Date().toISOString(),
      status: 'Processing',
      ...orderData
    };

    // Save order to user-specific localStorage
    const userOrdersKey = `orders_${user.email}`;
    const existingOrders = JSON.parse(localStorage.getItem(userOrdersKey) || '[]');
    const updatedOrders = [...existingOrders, order];
    localStorage.setItem(userOrdersKey, JSON.stringify(updatedOrders));

    // Update orders state
    setOrders(prev => [...prev, order]);

    // Clear cart
    setCart([]);
    localStorage.setItem('cart_items', JSON.stringify([]));

    // Show success message
    toast.success('Order placed successfully!');
  };

  // Admin functions
  const handleAddProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  const handleUpdateProduct = (productId, updates) => {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, ...updates } : p));
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  // Review functions are handled by handleSubmitReview which persists to localStorage

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const wishlistCount = wishlist.length;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (modalProduct) closeProductModal();
        else if (isCartOpen) setIsCartOpen(false);
        else if (isWishlistOpen) setIsWishlistOpen(false);
        else if (isCheckoutOpen) setIsCheckoutOpen(false);
        else if (isAdminOpen) setIsAdminOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalProduct, isCartOpen, isWishlistOpen, isCheckoutOpen, isAdminOpen]);

  return (
    <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={2300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          draggable
          theme={isDarkMode ? 'dark' : 'light'}
        />
        <Header 
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onCartToggle={toggleCart}
          onWishlistToggle={handleWishlistToggle}
          onAdminToggle={() => setIsAdminOpen(true)}
          // Provide single source search controls to Header
          searchValue={searchTerm}
          onSearchChange={(val) => handleFilterChange('search', val)}
          searchSuggestions={filteredProducts}
        />

        <Routes>
          <Route path="/" element={
            <Home
              filteredProducts={filteredProducts}
              wishlist={wishlist}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              onOpenModal={openProductModal}
              filters={filtersForProducts}
              onFilterChange={handleFilterChange}
              onViewCollection={handleViewCollection}
              onWriteReview={handleWriteReview}
              reviewsByProduct={reviewsByProduct}
              onFly={handleFly}
            />
          } />

          <Route path="/collections" element={
            <div className="section container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Our Collections</h1>
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
              </div>
              <div className="collections-grid">
                {Array.from(new Set(products.map(p => p.category))).map(category => {
                  const collectionImage = products.find(p => p.category === category)?.images[0];
                  return (
                    <Link key={category} to={`/collection/${category}`} className="collection-card">
                      {collectionImage && (
                        <div className="collection-image">
                          <img src={collectionImage} alt={category} />
                        </div>
                      )}
                      <h2>{category.replace('-', ' ')}</h2>
                      <span className="collection-count">
                        {products.filter(p => p.category === category).length} items
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          } />

          <Route path="/collection/:type" element={
            <CollectionPage
              products={products}
              wishlist={wishlist}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              onOpenModal={openProductModal}
              onFly={handleFly}
            />
          } />
          <Route path="/shop" element={<Shop products={products} wishlist={wishlist} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} onOpenModal={openProductModal} reviewsByProduct={reviewsByProduct} onFly={handleFly} />} />

          <Route path="/review" element={<ReviewPage />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Profile & account pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/payments" element={<Payments />} />

          {/* Shopping related */}
          <Route path="/recently-viewed" element={<RecentlyViewed />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>

        <Footer onSubscribe={handleSubscribe} />

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen}
        cart={cart}
        onClose={toggleCart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
        onContinueShopping={handleContinueShopping}
      />

      {/* Add Checkout Button to Cart */}
      {isCartOpen && cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: '100px', right: isCartOpen ? '20px' : '-500px', zIndex: 1501, transition: 'right 0.4s' }}>
          <button className="btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* Wishlist Sidebar */}
      <Wishlist 
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemove={removeFromWishlist}
        onAddToCart={addToCart}
        onMoveAllToCart={moveAllToCart}
        onFly={handleFly}
      />

      {/* Checkout Modal */}
      <Checkout 
        isOpen={isCheckoutOpen}
        cart={cart}
        cartTotal={cartTotal}
        onClose={() => setIsCheckoutOpen(false)}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* Product Modal */}
      <ProductModal 
        isOpen={!!modalProduct}
        product={modalProduct}
        wishlist={wishlist}
        onClose={closeProductModal}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        onFly={handleFly}
      />

      <ReviewModal
        product={reviewingProduct}
        isOpen={reviewModalOpen}
        onClose={() => { setReviewModalOpen(false); setReviewingProduct(null); }}
        onSubmit={(review) => handleSubmitReview(reviewingProduct.id, review)}
      />

      {/* Admin Panel - show for all authenticated users */}
      {isAuthenticated() && (
        <AdminPanel
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          products={products}
          orders={orders}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Notifications */}
      {/* Fly animations (portal) */}
      {flyItems.map(item => (
        <FlyToIcon
          key={item.id}
          id={item.id}
          src={item.src}
          startRect={item.startRect}
          targetSelector={item.selector}
          onComplete={(id) => setFlyItems(prev => prev.filter(i => i.id !== id))}
        />
      ))}
      {/* notifications are handled by react-toastify; legacy Notification UI removed */}
    </div>
  );
}

export default App;