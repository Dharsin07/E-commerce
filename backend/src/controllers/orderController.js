const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ 
      success: true, 
      data: orders.map(order => ({
        ...order,
        items: order.items.map(item => ({
          id: item.id,
          name: item.product.name,
          price: item.price,
          quantity: item.quantity,
          image: item.product.images?.[0] || '/placeholder.jpg'
        }))
      }))
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ success: false, error: 'Failed to get orders' });
  }
};

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items, totalAmount, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'No items in order' });
    }

    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount,
        status: 'pending',
        shippingAddress,
        items: {
          create: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    // Clear user cart after order creation
    await prisma.cartItem.deleteMany({
      where: { userId }
    });

    res.status(201).json({ 
      success: true, 
      data: {
        ...order,
        items: order.items.map(item => ({
          id: item.id,
          name: item.product.name,
          price: item.price,
          quantity: item.quantity,
          image: item.product.images?.[0] || '/placeholder.jpg'
        }))
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ success: false, error: 'Failed to create order' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const order = await prisma.order.findFirst({
      where: { 
        id: parseInt(id),
        userId 
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.json({ 
      success: true, 
      data: {
        ...order,
        items: order.items.map(item => ({
          id: item.id,
          name: item.product.name,
          price: item.price,
          quantity: item.quantity,
          image: item.product.images?.[0] || '/placeholder.jpg'
        }))
      }
    });
  } catch (error) {
    console.error('Get order by ID error:', error);
    res.status(500).json({ success: false, error: 'Failed to get order' });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }

    const order = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    res.json({ 
      success: true, 
      data: {
        ...order,
        items: order.items.map(item => ({
          id: item.id,
          name: item.product.name,
          price: item.price,
          quantity: item.quantity,
          image: item.product.images?.[0] || '/placeholder.jpg'
        }))
      }
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ success: false, error: 'Failed to update order status' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ 
      success: true, 
      data: orders.map(order => ({
        ...order,
        items: order.items.map(item => ({
          id: item.id,
          name: item.product.name,
          price: item.price,
          quantity: item.quantity,
          image: item.product.images?.[0] || '/placeholder.jpg'
        }))
      }))
    });
  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({ success: false, error: 'Failed to get all orders' });
  }
};

module.exports = {
  getOrders,
  createOrder,
  getOrderById,
  updateOrderStatus,
  getAllOrders
};
