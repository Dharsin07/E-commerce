const fs = require('fs').promises;
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../../data/products.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.access(path.dirname(PRODUCTS_FILE));
  } catch {
    await fs.mkdir(path.dirname(PRODUCTS_FILE), { recursive: true });
  }
};

// Read products from local storage
const getProducts = async () => {
  await ensureDataDir();
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Save products to local storage
const saveProducts = async (products) => {
  await ensureDataDir();
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
};

// Add product to local storage
const addProduct = async (product) => {
  const products = await getProducts();
  const newProduct = {
    ...product,
    id: Date.now(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  products.push(newProduct);
  await saveProducts(products);
  return newProduct;
};

// Update product in local storage
const updateProduct = async (id, updates) => {
  const products = await getProducts();
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return null;
  
  products[index] = {
    ...products[index],
    ...updates,
    updated_at: new Date().toISOString()
  };
  await saveProducts(products);
  return products[index];
};

// Delete product from local storage
const deleteProduct = async (id) => {
  const products = await getProducts();
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return null;
  
  const deleted = products.splice(index, 1)[0];
  await saveProducts(products);
  return deleted;
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
