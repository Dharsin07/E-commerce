// Temporary admin controller - will be implemented later
const getDashboardStats = async (req, res) => {
  res.json({ success: true, data: {}, message: 'Admin dashboard - coming soon' });
};

const getUsers = async (req, res) => {
  res.json({ success: true, data: [], message: 'Get users - coming soon' });
};

module.exports = {
  getDashboardStats,
  getUsers
};
