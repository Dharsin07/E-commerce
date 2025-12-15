// Image utility functions for handling product images

export const handleImageError = (e, fallbackUrl = null) => {
  // First try fallback URL if provided
  if (fallbackUrl && e.target.src !== fallbackUrl) {
    e.target.src = fallbackUrl;
    e.target.onerror = null; // Prevent infinite loop
    return;
  }
  
  // Use placeholder as final fallback
  e.target.src = '/placeholder.jpg';
  e.target.onerror = null;
};

export const getSupabaseImageUrl = (productId) => {
  const baseUrl = 'https://jsmskqsmsptrnjilvkrj.supabase.co/storage/v1/object/public/product-images/';
  const imageMap = {
    1: 'modern-sofa.jpg',
    2: 'venetian-table.jpg',
    3: 'parisian-chair.jpg',
    4: 'scandinavian-shelf.jpg',
    5: 'executive-desk.jpg',
    6: 'luxury-bed.jpg',
    7: 'crystal-chandelier.jpg',
    8: 'mahogany-chairs.jpg',
    9: 'harbor-table.jpg',
    10: 'cloud-ottoman.jpg',
    11: 'monroe-chair.jpg',
    12: 'elm-console.jpg',
    13: 'bergen-chair.jpg',
    14: 'haven-table.jpg',
    15: 'ridge-bench.jpg',
    16: 'alder-desk.jpg',
    17: 'loft-bed.jpg',
    18: 'cove-sofa.jpg',
    19: 'aurora-lamp.jpg',
    20: 'marina-table.jpg'
  };
  
  return `${baseUrl}${imageMap[productId] || 'placeholder.jpg'}`;
};

export const validateImageUrls = async (urls) => {
  const results = await Promise.allSettled(
    urls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ url, status: 'ok' });
        img.onerror = () => reject({ url, status: 'error' });
        img.src = url;
      });
    })
  );
  
  return results.map(result => 
    result.status === 'fulfilled' ? result.value : result.reason
  );
};
