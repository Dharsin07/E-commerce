// Persistent cart controller using file storage - works immediately without database setup
const fs = require('fs');
const path = require('path');
const { productsData } = require('../../react-app/src/data/productsData.js');

// File path for cart storage
const CART_STORAGE_FILE = path.join(__dirname, '../../data/cart-storage.json');

// Helper function to get user ID from request
const getUserId = (req) => {
  // Try to get user ID from authenticated user
  if (req.user?.uid) return req.user.uid;
  if (req.user?.id) return req.user.id;
  
  // Try to get from Firebase token header
  if (req.headers['x-user-id']) return req.headers['x-user-id'];
  
  // Try to get from authorization header (Firebase token)
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace('Bearer ', '');
    if (token && token !== 'null') {
      // For now, use a hash of the token as user ID
      return `user-${token.substring(0, 8)}`;
    }
  }
  
  // No user found - return null to prevent sharing
  return null;
};

// Helper function to load cart data from file
const loadCartData = () => {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(CART_STORAGE_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    if (fs.existsSync(CART_STORAGE_FILE)) {
      const data = fs.readFileSync(CART_STORAGE_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading cart data:', error);
  }
  return {};
};

// Helper function to save cart data to file
const saveCartData = (cartData) => {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(CART_STORAGE_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(CART_STORAGE_FILE, JSON.stringify(cartData, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving cart data:', error);
    return false;
  }
};

// Get cart items for a user
const getCartItems = async (req, res) => {
  try {
    const userId = getUserId(req);
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }
    
    console.log('Getting cart items for user:', userId);

    const cartData = loadCartData();
    const userCart = cartData[userId] || [];

    // Enrich cart items with product details from local data
    const enrichedCart = userCart.map(cartItem => {
      const product = productsData.find(p => p.id === parseInt(cartItem.productId));
      return {
        id: cartItem.id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        name: product?.name || cartItem.name || `Product ${cartItem.productId}`,
        price: product?.price || cartItem.price || 0,
        image: product?.images?.[0] || cartItem.image || '/placeholder.jpg',
        created_at: cartItem.created_at,
        updated_at: cartItem.updated_at
      };
    });

    res.json({
      success: true,
      data: {
        items: enrichedCart,
        total: enrichedCart.reduce((sum, item) => sum + (item.quantity * item.price), 0),
        count: enrichedCart.reduce((sum, item) => sum + item.quantity, 0)
      }
    });
  } catch (error) {
    console.error('Error in getCartItems:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get cart items',
      details: error.message
    });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const userId = getUserId(req);
    const { productId, quantity = 1 } = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    if (!productId) {
      return res.status(400).json({ 
        success: false, 
        error: 'Product ID required' 
      });
    }

    const cartData = loadCartData();
    const userCart = cartData[userId] || [];

    // Check if item already exists in cart
    const existingItemIndex = userCart.findIndex(item => item.productId === productId);
    
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      userCart[existingItemIndex].quantity += quantity;
      userCart[existingItemIndex].updated_at = new Date().toISOString();
    } else {
      // Add new item to cart - fetch and store product details from local data
      const product = productsData.find(p => p.id === parseInt(productId));
      const newItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        productId: productId,
        quantity: quantity,
        name: product?.name || `Product ${productId}`,
        price: product?.price || 0,
        image: product?.images?.[0] || '/placeholder.jpg',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      userCart.push(newItem);
    }

    cartData[userId] = userCart;
    
    if (saveCartData(cartData)) {
      const updatedItem = userCart[existingItemIndex >= 0 ? existingItemIndex : userCart.length - 1];

      res.json({
        success: true,
        data: {
          id: updatedItem.id,
          productId: updatedItem.productId,
          quantity: updatedItem.quantity,
          created_at: updatedItem.created_at,
          updated_at: updatedItem.updated_at
        },
        message: 'Item added to cart successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to save cart data'
      });
    }
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add item to cart',
      details: error.message
    });
  }
};

// Update cart item quantity
const updateCartItemQuantity = async (req, res) => {
  try {
    const userId = getUserId(req);
    const productId = req.params.product_id;
    const { quantity } = req.body;

    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ 
        success: false, 
        error: 'Product ID and valid quantity are required' 
      });
    }

    const cartData = loadCartData();
    const userCart = cartData[userId] || [];

    // Find and update the item
    const itemIndex = userCart.findIndex(item => item.productId === productId);
    
    if (itemIndex < 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Cart item not found' 
      });
    }

    userCart[itemIndex].quantity = quantity;
    userCart[itemIndex].updated_at = new Date().toISOString();

    cartData[userId] = userCart;

    if (saveCartData(cartData)) {
      res.json({
        success: true,
        data: {
          id: userCart[itemIndex].id,
          productId: userCart[itemIndex].productId,
          quantity: userCart[itemIndex].quantity,
          created_at: userCart[itemIndex].created_at,
          updated_at: userCart[itemIndex].updated_at
        },
        message: 'Cart item updated successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to save cart data'
      });
    }
  } catch (error) {
    console.error('Error in updateCartItemQuantity:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update cart item',
      details: error.message
    });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = getUserId(req);
    const productId = req.params.product_id;

    if (!productId) {
      return res.status(400).json({ 
        success: false, 
        error: 'Product ID is required' 
      });
    }

    const cartData = loadCartData();
    const userCart = cartData[userId] || [];

    const originalLength = userCart.length;
    
    // Remove item from cart
    const updatedCart = userCart.filter(item => item.productId !== productId);
    cartData[userId] = updatedCart;

    if (updatedCart.length === originalLength) {
      return res.status(404).json({ 
        success: false, 
        error: 'Cart item not found' 
      });
    }

    if (saveCartData(cartData)) {
      res.json({
        success: true,
        message: 'Item removed from cart successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to save cart data'
      });
    }
  } catch (error) {
    console.error('Error in removeFromCart:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to remove item from cart',
      details: error.message
    });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    const userId = getUserId(req);

    const cartData = loadCartData();
    cartData[userId] = [];

    if (saveCartData(cartData)) {
      res.json({
        success: true,
        message: 'Cart cleared successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to save cart data'
      });
    }
  } catch (error) {
    console.error('Error in clearCart:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to clear cart',
      details: error.message
    });
  }
};

// Get cart summary
const getCartSummary = async (req, res) => {
  try {
    const userId = getUserId(req);

    const cartData = loadCartData();
    const userCart = cartData[userId] || [];

    const total = userCart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const count = userCart.reduce((sum, item) => sum + item.quantity, 0);

    res.json({
      success: true,
      data: { total, count }
    });
  } catch (error) {
    console.error('Error in getCartSummary:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getCartItems,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  getCartSummary
};
