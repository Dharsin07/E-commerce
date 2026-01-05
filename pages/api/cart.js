import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with service role key for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper function to get user ID from request
const getUserId = (req) => {
  // This assumes you're using a middleware that sets req.user
  // Adjust based on your auth implementation
  return req.user?.uid || req.user?.sub || req.user?.id;
};

// Helper function to validate authentication
const authenticateUser = (req) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return { authenticated: false, error: 'Access token required' };
  }
  
  // For development, you might want to implement token verification
  // For production, verify the token with your auth provider
  const userId = getUserId(req);
  
  if (!userId || userId === 'dev-user') {
    return { authenticated: false, error: 'Invalid authentication' };
  }
  
  return { authenticated: true, userId };
};

// Helper function to validate product exists and get stock
const validateProduct = async (productId) => {
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select('id, name, price, stock, images, description, category_id')
      .eq('id', productId)
      .single();
    
    if (error || !product) {
      console.error('Product validation error:', error);
      return { valid: false, error: 'Product not found' };
    }
    
    return { valid: true, product };
  } catch (error) {
    console.error('Error validating product:', error);
    return { valid: false, error: 'Failed to validate product' };
  }
};

// Helper function to get user's cart
const getUserCart = async (userId) => {
  try {
    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select(`
        *,
        products:product_id (
          id,
          name,
          price,
          images,
          description,
          category_id,
          stock
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching cart:', error);
      return { success: false, error: 'Failed to fetch cart' };
    }
    
    const formattedItems = (cartItems || []).map(item => ({
      id: item.id,
      productId: item.product_id,
      quantity: item.quantity,
      price: item.products?.price || item.price || 0,
      name: item.products?.name || `Product ${item.product_id}`,
      image: item.products?.images?.[0] || '/placeholder.jpg',
      description: item.products?.description || '',
      category: item.products?.category_id || '',
      stock: item.products?.stock || 0,
      created_at: item.created_at,
      updated_at: item.updated_at
    }));
    
    const total = formattedItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const count = formattedItems.reduce((sum, item) => sum + item.quantity, 0);
    
    return { 
      success: true, 
      data: {
        items: formattedItems,
        total,
        count
      }
    };
  } catch (error) {
    console.error('Error in getUserCart:', error);
    return { success: false, error: 'Failed to get user cart' };
  }
};

export default async function handler(req, res) {
  // Only allow POST method for adding to cart
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'Only POST method is supported'
    });
  }

  try {
    console.log('Cart API called:', { method: req.method, body: req.body });

    // 1. Authenticate user
    const auth = authenticateUser(req);
    if (!auth.authenticated) {
      console.error('Authentication failed:', auth.error);
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: auth.error
      });
    }

    const userId = auth.userId;
    console.log('User authenticated:', userId);

    // 2. Validate request body
    const { productId, quantity } = req.body;
    
    if (!productId || !Number.isInteger(Number(productId))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid product ID',
        message: 'Product ID must be a valid integer'
      });
    }
    
    if (!quantity || !Number.isInteger(Number(quantity)) || Number(quantity) <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid quantity',
        message: 'Quantity must be a positive integer'
      });
    }

    const requestedQuantity = Number(quantity);
    console.log('Request validated:', { productId, quantity: requestedQuantity });

    // 3. Check if product exists and get stock information
    const productValidation = await validateProduct(productId);
    if (!productValidation.valid) {
      return res.status(404).json({
        success: false,
        error: 'Product validation failed',
        message: productValidation.error
      });
    }

    const product = productValidation.product;
    console.log('Product validated:', { productId: product.id, stock: product.stock });

    // 4. Check stock availability
    if (requestedQuantity > product.stock) {
      return res.status(400).json({
        success: false,
        error: 'Insufficient stock',
        message: `Only ${product.stock} items available in stock`,
        availableStock: product.stock,
        requestedQuantity
      });
    }

    // 5. Check if item already exists in cart
    const { data: existingItem, error: checkError } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId)
      .eq('product_id', productId)
      .single();

    console.log('Existing cart item check:', { existingItem, error: checkError });

    let result;
    let newQuantity = requestedQuantity;

    if (existingItem) {
      // Item exists, check if new total quantity exceeds stock
      newQuantity = existingItem.quantity + requestedQuantity;
      
      if (newQuantity > product.stock) {
        return res.status(400).json({
          success: false,
          error: 'Insufficient stock',
          message: `Cannot add ${requestedQuantity} more items. You have ${existingItem.quantity} in cart and only ${product.stock} available in stock.`,
          availableStock: product.stock,
          currentQuantity: existingItem.quantity,
          requestedQuantity
        });
      }

      // Update existing item quantity
      const { data, error } = await supabase
        .from('cart_items')
        .update({ 
          quantity: newQuantity,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingItem.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating cart item:', error);
        return res.status(500).json({
          success: false,
          error: 'Failed to update cart item',
          message: 'Database error occurred while updating cart'
        });
      }

      result = data;
      console.log('Cart item updated:', result);
    } else {
      // Add new item to cart
      const { data, error } = await supabase
        .from('cart_items')
        .insert({
          user_id: userId,
          product_id: productId,
          quantity: requestedQuantity,
          price: product.price,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding cart item:', error);
        
        // Handle specific database errors
        if (error.code === 'PGRST116') {
          return res.status(500).json({
            success: false,
            error: 'Database table not found',
            message: 'Cart items table does not exist. Please run database setup.'
          });
        }
        
        if (error.code === '23503') {
          return res.status(400).json({
            success: false,
            error: 'Foreign key violation',
            message: 'Product does not exist in database'
          });
        }
        
        return res.status(500).json({
          success: false,
          error: 'Failed to add item to cart',
          message: 'Database error occurred while adding item'
        });
      }

      result = data;
      console.log('New cart item added:', result);
    }

    // 6. Get updated cart to return to client
    const updatedCart = await getUserCart(userId);
    
    if (!updatedCart.success) {
      console.error('Error fetching updated cart:', updatedCart.error);
      // Still return success for the add operation, but note the cart fetch error
      return res.status(200).json({
        success: true,
        message: existingItem ? 'Cart item updated successfully' : 'Item added to cart successfully',
        data: {
          addedItem: {
            id: result.id,
            productId: result.product_id,
            quantity: result.quantity,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || '/placeholder.jpg',
            description: product.description,
            category: product.category_id
          },
          cartWarning: 'Unable to fetch updated cart'
        }
      });
    }

    // 7. Return success response with updated cart
    res.status(200).json({
      success: true,
      message: existingItem ? 'Cart item updated successfully' : 'Item added to cart successfully',
      data: {
        addedItem: {
          id: result.id,
          productId: result.product_id,
          quantity: result.quantity,
          name: product.name,
          price: product.price,
          image: product.images?.[0] || '/placeholder.jpg',
          description: product.description,
          category: product.category_id
        },
        cart: updatedCart.data
      }
    });

  } catch (error) {
    console.error('Unexpected error in cart API:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'An unexpected error occurred while processing your request'
    });
  }
}

// Export additional HTTP methods if needed
export async function getCart(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const auth = authenticateUser(req);
    if (!auth.authenticated) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: auth.error
      });
    }

    const cart = await getUserCart(auth.userId);
    
    if (!cart.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch cart',
        message: cart.error
      });
    }

    res.status(200).json({
      success: true,
      data: cart.data
    });

  } catch (error) {
    console.error('Error in getCart:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to fetch cart'
    });
  }
}
