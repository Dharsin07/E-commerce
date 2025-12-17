import { useState, useEffect, useCallback } from 'react';
import { supabase, getCartItems, getWishlistItems } from '../lib/supabase';

export const useDataPreloader = (user, products = []) => {
  const [preloadedData, setPreloadedData] = useState({
    cart: [],
    wishlist: [],
    reviewsByProduct: {},
    isLoading: false,
    error: null
  });

  const preloadData = useCallback(async (userId) => {
    if (!userId) return;

    setPreloadedData(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const productIds = Array.isArray(products) ? products.map(p => p?.id).filter(Boolean) : [];

      // Load all data in parallel for maximum performance
      const [cartData, wishlistData, allProductReviews] = await Promise.all([
        getCartItems(userId),
        getWishlistItems(userId),
        // Batch load all reviews at once
        productIds.length
          ? supabase
            .from('reviews')
            .select(`
              *,
              profiles:user_id (
                name
              )
            `)
            .in('product_id', productIds)
            .order('created_at', { ascending: false })
          : Promise.resolve({ data: [] })
      ]);

      // Process cart data with product image fallback
      const formattedCart = cartData.map(item => {
        return {
          id: item.id,
          productId: item.product_id,
          name: item.products?.name || 'Unknown Product',
          price: item.products?.price || 0,
          image: item.products?.images?.[0] || '/placeholder.jpg',
          quantity: item.quantity
        };
      });

      // Process wishlist data
      const formattedWishlist = wishlistData.map(item => {
        return {
          id: item.product_id,
          name: item.products?.name || 'Unknown Product',
          price: item.products?.price || 0,
          image: item.products?.images?.[0] || '/placeholder.jpg'
        };
      });

      // Group reviews by product for efficient lookup
      const reviewsMap = {};
      allProductReviews.data?.forEach(review => {
        if (!reviewsMap[review.product_id]) {
          reviewsMap[review.product_id] = [];
        }
        reviewsMap[review.product_id].push(review);
      });

      setPreloadedData({
        cart: formattedCart,
        wishlist: formattedWishlist,
        reviewsByProduct: reviewsMap,
        isLoading: false,
        error: null
      });

    } catch (error) {
      console.error('Data preloading failed:', error);
      setPreloadedData(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  }, [products]);

  // Clear data when user logs out
  const clearData = useCallback(() => {
    setPreloadedData({
      cart: [],
      wishlist: [],
      reviewsByProduct: {},
      isLoading: false,
      error: null
    });
  }, []);

  useEffect(() => {
    if (user && (user.uid || user.id)) {
      const userId = user.uid || user.id;
      preloadData(userId);
    } else {
      clearData();
    }
  }, [user, preloadData, clearData]);

  return {
    ...preloadedData,
    preloadData,
    clearData
  };
};
