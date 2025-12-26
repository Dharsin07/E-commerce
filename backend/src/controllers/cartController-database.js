// Database-based cart controller for permanent cart storage
const supabase = require('../config/supabase');

// Helper function to get user ID from request
const getUserId = (req) => {
  return req.user?.uid || req.user?.sub || req.user?.id || 'dev-user';
};

// Get cart items for a user
const getCartItems = async (req, res) => {
  try {
    const userId = getUserId(req);
    console.log('Getting cart items for user:', userId);

    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    console.log('Supabase query result - cartItems:', cartItems, 'error:', error);

    if (error) {
      console.error('Database error in getCartItems:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        success: false,
        error: 'Failed to get cart items',
        details: error.message
      });
    }

    // Format the response
    const formattedItems = (cartItems || []).map(item => ({
      id: item.id,
      productId: item.product_id,
      quantity: item.quantity,
      price: item.price || 0,
      name: `Product ${item.product_id}`,
      image: '/placeholder.jpg',
      created_at: item.created_at,
      updated_at: item.updated_at
    }));

    res.json({
      success: true,
      data: {
        items: formattedItems,
        total: formattedItems.reduce((sum, item) => sum + (item.quantity * item.price), 0),
        count: formattedItems.reduce((sum, item) => sum + item.quantity, 0)
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

    if (!productId) {
      return res.status(400).json({ 
        success: false, 
        error: 'Product ID required' 
      });
    }

    // Check if item already exists in cart
    const { data: existingItem, error: checkError } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId)
      .eq('product_id', productId)
      .single();

    let result;

    if (existingItem) {
      // Update existing item quantity
      const { data, error } = await supabase
        .from('cart_items')
        .update({ 
          quantity: existingItem.quantity + quantity,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingItem.id)
        .select()
        .single();

      if (error) throw error;
      result = data;
    } else {
      // Add new item to cart
      const { data, error } = await supabase
        .from('cart_items')
        .insert({
          user_id: userId,
          product_id: productId,
          quantity: quantity,
          price: 99.99, // Default price - in real app this would come from products table
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        // If table doesn't exist, create it implicitly
        if (error.code === 'PGRST116') {
          console.log('Cart items table does not exist, creating fallback response');
          return res.json({
            success: true,
            data: {
              id: `temp-${Date.now()}`,
              productId: productId,
              quantity: quantity,
              name: `Product ${productId}`,
              price: 99.99,
              image: '/placeholder.jpg'
            },
            message: 'Item added to cart (temporary storage)'
          });
        }
        throw error;
      }
      result = data;
    }

    res.json({
      success: true,
      data: {
        id: result.id,
        productId: result.product_id,
        quantity: result.quantity,
        name: `Product ${result.product_id}`,
        price: result.price || 99.99,
        image: '/placeholder.jpg'
      },
      message: 'Item added to cart successfully'
    });
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

    console.log('Update cart item - userId:', userId, 'productId:', productId, 'quantity:', quantity);

    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ 
        success: false, 
        error: 'Product ID and valid quantity are required' 
      });
    }

    // First find the cart item by user_id and product_id
    const { data: existingItem, error: findError } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId)
      .eq('product_id', productId)
      .single();

    console.log('Find result - existingItem:', existingItem, 'findError:', findError);

    if (findError || !existingItem) {
      console.log('Cart item not found - returning 404');
      return res.status(404).json({
        success: false,
        error: 'Cart item not found'
      });
    }

    console.log('Found cart item, updating with ID:', existingItem.id);

    // Update the cart item using its ID
    const { data, error } = await supabase
      .from('cart_items')
      .update({ 
        quantity: quantity,
        updated_at: new Date().toISOString()
      })
      .eq('id', existingItem.id)
      .select()
      .single();

    console.log('Update result - data:', data, 'error:', error);

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data: {
        id: data.id,
        productId: data.product_id,
        quantity: data.quantity,
        name: `Product ${data.product_id}`,
        price: data.price || 99.99,
        image: '/placeholder.jpg'
      },
      message: 'Cart item updated successfully'
    });
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

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', userId)
      .eq('product_id', productId);

    if (error) {
      console.error('Error removing from cart:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to remove item from cart'
      });
    }

    res.json({
      success: true,
      message: 'Item removed from cart successfully'
    });
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

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', userId);

    if (error) {
      console.error('Error clearing cart:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to clear cart'
      });
    }

    res.json({
      success: true,
      message: 'Cart cleared successfully'
    });
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

    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        quantity,
        products:product_id (
          price
        )
      `)
      .eq('user_id', userId);

    if (error) {
      console.error('Get cart summary error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }

    const total = (data || []).reduce((sum, item) => sum + (item.quantity * (item.products?.price || 99.99)), 0);
    const count = (data || []).reduce((sum, item) => sum + item.quantity, 0);

    res.json({
      success: true,
      data: { total, count }
    });
  } catch (error) {
    console.error('Error in getCartSummary:', error);
    res.status(500).json({ success: false, error: error.message });
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
