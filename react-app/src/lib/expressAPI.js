// Express API replacement for Supabase functions
import api from '../services/api';

// Export functions that match the original Supabase API
export const supabase = null; // Placeholder for compatibility

// Product functions
export const getProducts = async () => {
  const response = await api.products.getProducts();
  return response.data;
};

// Cart functions
export const getCartItems = async (userId) => {
  const response = await api.cart.getCartItems();
  return response.data.items.map(item => ({
    id: item.id,
    product_id: item.product_id,
    quantity: item.quantity,
    products: {
      id: item.product_id,
      name: item.name,
      price: item.price,
      images: item.images
    }
  }));
};

export const addToCart = async (userId, productId, quantity = 1) => {
  await api.cart.addToCart(productId, quantity);
  return { success: true };
};

export const updateCartItemQuantity = async (userId, productId, quantity) => {
  await api.cart.updateCartItemQuantity(productId, quantity);
  return { success: true };
};

export const removeFromCart = async (userId, productId) => {
  await api.cart.removeFromCart(productId);
  return { success: true };
};

export const clearCart = async (userId) => {
  await api.cart.clearCart();
  return { success: true };
};

// Wishlist functions
export const getWishlistItems = async (userId) => {
  const response = await api.wishlist.getWishlistItems();
  return response.data.map(item => ({
    id: item.id,
    product_id: item.product_id,
    products: {
      id: item.product_id,
      name: item.name,
      price: item.price,
      images: item.images
    }
  }));
};

export const toggleWishlist = async (userId, productId) => {
  const response = await api.wishlist.toggleWishlist(productId);
  return response;
};

// Reviews functions
export const getReviewsByProduct = async (productId) => {
  // For now, return empty array - you can implement reviews API later
  return [];
};

export const submitReview = async (userId, productId, rating, comment) => {
  // For now, return mock response - you can implement reviews API later
  return { success: true };
};

// User preferences functions
export const getUserPreference = async (userId, key) => {
  // For now, return null - you can implement preferences API later
  return null;
};

export const setUserPreference = async (userId, key, value) => {
  // For now, return mock response - you can implement preferences API later
  return value;
};

// Recently viewed functions
export const getRecentlyViewed = async (userId, limit = 30) => {
  // For now, return empty array - you can implement recently viewed API later
  return [];
};

export const addToRecentlyViewed = async (userId, productId) => {
  // For now, return mock response - you can implement recently viewed API later
  return { success: true };
};

// Payment methods functions
export const getPaymentMethods = async (userId) => {
  // For now, return empty array - you can implement payment methods API later
  return [];
};

export const addPaymentMethod = async (userId, paymentData) => {
  // For now, return mock response - you can implement payment methods API later
  return { success: true };
};

// Returns functions
export const getReturns = async (userId) => {
  // For now, return empty array - you can implement returns API later
  return [];
};

export const createReturn = async (userId, orderId, reason) => {
  // For now, return mock response - you can implement returns API later
  return { success: true };
};

// Profile functions
export const upsertProfile = async (uid, email, name, role = 'user') => {
  // Profile is created automatically during token verification
  return { success: true };
};

export const getProfile = async (uid) => {
  // Profile is handled during authentication
  return { name: '', role: 'user' };
};

export const getAllProfiles = async () => {
  const response = await api.admin.getAllUsers();
  return response.data;
};

export const createProfile = async (email, name, role = 'user') => {
  // This would be an admin function
  return { success: true };
};

export const updateProfile = async (uid, updates) => {
  // This would be an admin function
  return { success: true };
};

export const deleteProfile = async (uid) => {
  // This would be an admin function
  return { success: true };
};
