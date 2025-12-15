const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PRODUCTS_FILE = path.join(__dirname, 'products.json');

app.use(cors());
app.use(express.json());

// Helper functions for local storage
const readProducts = async () => {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveProducts = async (products) => {
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
};

// Test local storage
app.get('/test-storage', async (req, res) => {
  try {
    const products = await readProducts();
    res.json({ success: true, message: 'Local storage working!', count: products.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET all products (permanent storage)
app.get('/api/products', async (req, res) => {
  try {
    const products = await readProducts();
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST create product (permanent storage)
app.post('/api/products', async (req, res) => {
  try {
    const products = await readProducts();
    const newProduct = {
      id: Date.now(),
      ...req.body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    products.push(newProduct);
    await saveProducts(products);
    res.json({ success: true, data: newProduct, message: 'Product permanently stored!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update product (permanent storage)
app.put('/api/products/:id', async (req, res) => {
  try {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    products[index] = {
      ...products[index],
      ...req.body,
      updated_at: new Date().toISOString()
    };
    await saveProducts(products);
    res.json({ success: true, data: products[index], message: 'Product permanently updated!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE product (permanent storage)
app.delete('/api/products/:id', async (req, res) => {
  try {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    const deleted = products.splice(index, 1)[0];
    await saveProducts(products);
    res.json({ success: true, data: deleted, message: 'Product permanently deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Permanent Storage Server running on port ${PORT}`);
  console.log('Test storage at: http://localhost:5000/test-storage');
  console.log('Products API at: http://localhost:5000/api/products');
  console.log('Products are PERMANENTLY stored in products.json file!');
});
