// Debug what URL the browser is trying to fetch
console.log('API_BASE_URL would be:', import.meta?.env?.VITE_API_URL || 'http://localhost:5000/api');
console.log('Full URL for products:', (import.meta?.env?.VITE_API_URL || 'http://localhost:5000/api') + '/products');

// Test the exact fetch call the browser makes
const testFetch = async () => {
  const API_BASE_URL = 'http://localhost:5000/api';
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

testFetch();
