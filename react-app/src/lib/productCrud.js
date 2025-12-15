// =====================================================
// PRODUCT CRUD OPERATIONS FOR SUPABASE
// =====================================================

import { supabase } from './supabase';

export const createProduct = async (product) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{
      name: product.name,
      slug: product.slug || product.name.toLowerCase().replace(/\s+/g, '-'),
      description: product.description,
      price: product.price,
      category_id: product.category_id || 1,
      images: product.images || [],
      stock: product.stock || 0,
      featured: product.featured || false,
      in_stock: product.inStock !== false
    }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateProduct = async (productId, updates) => {
  const { data, error } = await supabase
    .from('products')
    .update({
      name: updates.name,
      slug: updates.slug || updates.name.toLowerCase().replace(/\s+/g, '-'),
      description: updates.description,
      price: updates.price,
      category_id: updates.category_id,
      images: updates.images,
      stock: updates.stock,
      featured: updates.featured,
      in_stock: updates.inStock,
      updated_at: new Date().toISOString()
    })
    .eq('id', productId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteProduct = async (productId) => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId);
  
  if (error) throw error;
  return true;
};
