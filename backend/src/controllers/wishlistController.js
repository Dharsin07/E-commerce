// Temporary wishlist controller - will be implemented later
const getWishlistItems = async (req, res) => {
  res.json({ success: true, data: [], message: 'Wishlist controller - coming soon' });
};

const addToWishlist = async (req, res) => {
  res.json({ success: true, message: 'Add to wishlist - coming soon' });
};

const removeFromWishlist = async (req, res) => {
  res.json({ success: true, message: 'Remove from wishlist - coming soon' });
};

module.exports = {
  getWishlistItems,
  addToWishlist,
  removeFromWishlist
};
