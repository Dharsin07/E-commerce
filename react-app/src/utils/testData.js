// Test localStorage behavior with dummy data

const testData = {
  orders: [
    {
      id: 1001,
      customerName: 'John Doe',
      items: [
        { id: 1, name: 'Modern Dining Chair', quantity: 2, price: 199.99 },
        { id: 2, name: 'Coffee Table', quantity: 1, price: 299.99 }
      ],
      total: 699.97,
      date: '2025-11-01T10:30:00Z',
      status: 'Delivered',
      address: '123 Main St, Anytown, ST 12345'
    },
    {
      id: 1002,
      customerName: 'Jane Smith',
      items: [
        { id: 3, name: 'Leather Sofa', quantity: 1, price: 999.99 }
      ],
      total: 999.99,
      date: '2025-11-02T14:15:00Z',
      status: 'Out for Delivery',
      address: '456 Oak Ave, Somewhere, ST 67890'
    }
  ],
  profile: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St',
    city: 'Anytown',
    country: 'United States'
  },
  wishlist: [
    { id: 5, name: 'Accent Chair', price: 249.99, images: ['/images/accent-chair.jpg'] },
    { id: 8, name: 'Floor Lamp', price: 129.99, images: ['/images/floor-lamp.jpg'] }
  ],
  returns: [
    {
      id: 2001,
      orderId: 1001,
      items: [
        { id: 1, name: 'Modern Dining Chair', quantity: 1, reason: 'defective' }
      ],
      status: 'Pending',
      date: '2025-11-03T09:00:00Z'
    }
  ],
  addresses: [
    {
      id: 1,
      type: 'Home',
      street: '123 Main St',
      city: 'Anytown',
      state: 'ST',
      zip: '12345',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      street: '789 Work Blvd',
      city: 'Business City',
      state: 'ST',
      zip: '67890',
      country: 'United States',
      isDefault: false
    }
  ]
};

// Function to initialize the test data
function initializeTestData() {
  Object.entries(testData).forEach(([key, value]) => {
    try {
      localStorage.setItem(key === 'profile' ? 'profile_info' : `${key}`, JSON.stringify(value));
      console.log(`✓ Successfully initialized ${key} data`);
    } catch (error) {
      console.error(`✗ Error initializing ${key} data:`, error);
    }
  });
}

// Function to clear test data
function clearTestData() {
  Object.keys(testData).forEach(key => {
    try {
      localStorage.removeItem(key === 'profile' ? 'profile_info' : `${key}`);
      console.log(`✓ Successfully cleared ${key} data`);
    } catch (error) {
      console.error(`✗ Error clearing ${key} data:`, error);
    }
  });
}

// Function to verify data integrity
function verifyDataIntegrity() {
  const results = {
    success: true,
    details: []
  };

  Object.entries(testData).forEach(([key, value]) => {
    try {
      const storedValue = JSON.parse(
        localStorage.getItem(key === 'profile' ? 'profile_info' : `${key}`)
      );
      const isValid = JSON.stringify(storedValue) === JSON.stringify(value);
      results.details.push({
        key,
        status: isValid ? 'valid' : 'invalid',
        message: isValid ? 'Data matches expected value' : 'Data mismatch'
      });
      if (!isValid) results.success = false;
    } catch (error) {
      results.success = false;
      results.details.push({
        key,
        status: 'error',
        message: error.message
      });
    }
  });

  return results;
}

// Initialize test data
console.log('Initializing test data...');
initializeTestData();

// Verify data integrity
console.log('\nVerifying data integrity...');
const verificationResults = verifyDataIntegrity();
console.log(`Data verification ${verificationResults.success ? 'passed' : 'failed'}:`);
verificationResults.details.forEach(detail => {
  console.log(`${detail.status === 'valid' ? '✓' : '✗'} ${detail.key}: ${detail.message}`);
});