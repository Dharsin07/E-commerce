// Temporary order controller - will be implemented later
const getOrders = async (req, res) => {
  res.json({ success: true, data: [], message: 'Order controller - coming soon' });
};

const createOrder = async (req, res) => {
  res.json({ success: true, message: 'Create order - coming soon' });
};

const getOrderById = async (req, res) => {
  res.json({ success: true, message: 'Get order by ID - coming soon' });
};

const updateOrderStatus = async (req, res) => {
  res.json({ success: true, message: 'Update order status - coming soon' });
};

module.exports = {
  getOrders,
  createOrder,
  getOrderById,
  updateOrderStatus
};
