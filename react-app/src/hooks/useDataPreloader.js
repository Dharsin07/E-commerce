import { useState, useEffect, useCallback } from 'react';
import { supabase, getCartItems, getWishlistItems } from '../lib/supabase';
import { productsData } from '../data/productsData';

export const useDataPreloader = (user) => {
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
      // Load all data in parallel for maximum performance
      const [cartData, wishlistData, allProductReviews] = await Promise.all([
        getCartItems(userId),
        getWishlistItems(userId),
        // Batch load all reviews at once
        supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              name
            )
          `)
          .in('product_id', productsData.map(p => p.id))
          .order('created_at', { ascending: false })
      ]);

      // Process cart data with product image fallback
      const formattedCart = cartData.map(item => {
        const originalProduct = productsData.find(p => p.id === item.product_id);
        return {
          id: item.id,
          productId: item.product_id,
          name: originalProduct?.name || item.products?.name || 'Unknown Product',
          price: originalProduct?.price || item.products?.price || 0,
          image: originalProduct?.images?.[0] || item.products?.images?.[0] || '/placeholder.jpg',
          quantity: item.quantity
        };
      });

      // Process wishlist data
      const formattedWishlist = wishlistData.map(item => {
        const originalProduct = productsData.find(p => p.id === item.product_id);
        return {
          id: item.product_id,
          name: originalProduct?.name || item.products?.name || 'Unknown Product',
          price: originalProduct?.price || item.products?.price || 0,
          image: originalProduct?.images?.[0] || item.products?.images?.[0] || '/placeholder.jpg'
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
  }, []);

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
