# Backend Setup Guide for Luxi E-commerce

## Overview
This guide will help you set up the complete Node.js/Express backend to replace direct Supabase calls in your React frontend.

## Prerequisites
- Node.js 16+ installed
- PostgreSQL database running
- Firebase project set up with authentication
- Your existing React frontend

## Step 1: Backend Setup

### 1.1 Install Dependencies
```bash
cd backend
npm install
```

### 1.2 Environment Configuration
Copy the `.env` file and update with your actual credentials:

```bash
cp .env.example .env
```

Update these values in `.env`:
```
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=luxi_db
DB_USER=postgres
DB_PASSWORD=your_actual_password

# Firebase (get from Firebase Console > Service Accounts)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_ACTUAL_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this

# Frontend
FRONTEND_URL=http://localhost:3000

# Server
NODE_ENV=development
PORT=5000
```

### 1.3 Database Setup
Run the existing Supabase SQL schema on your PostgreSQL database:

```bash
psql -h localhost -U postgres -d luxi_db -f ../supabase.sql
```

### 1.4 Start Backend Server
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## Step 2: Frontend Integration

### 2.1 Update React App Environment
Create `.env` file in `react-app/` directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 2.2 Update Supabase Imports
Replace Supabase imports in your React components:

**Before:**
```javascript
import { supabase, getCartItems, addToCart } from './lib/supabase';
```

**After:**
```javascript
import { getCartItems, addToCart } from './lib/expressAPI';
```

### 2.3 Update Authentication Context
Modify `AuthContext.jsx` to use the new API:

```javascript
// Add this to your login functions
const verifyTokenWithBackend = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Token verification failed:', error);
    return { success: false };
  }
};
```

### 2.4 Store Firebase Token
Update your auth context to store the Firebase token:

```javascript
// In your login success callback
localStorage.setItem('firebaseToken', token);
```

## Step 3: API Endpoints Reference

### Authentication
- `POST /api/auth/verify` - Verify Firebase token
- `POST /api/auth/refresh` - Refresh user session

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories` - Get categories
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get cart items
- `GET /api/cart/summary` - Get cart summary
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:product_id` - Update item quantity
- `DELETE /api/cart/:product_id` - Remove item
- `DELETE /api/cart` - Clear cart

### Wishlist
- `GET /api/wishlist` - Get wishlist items
- `POST /api/wishlist` - Add to wishlist
- `POST /api/wishlist/toggle` - Toggle wishlist item
- `DELETE /api/wishlist/:product_id` - Remove from wishlist
- `POST /api/wishlist/move-to-cart` - Move all to cart

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `DELETE /api/orders/:id/cancel` - Cancel order
- `GET /api/orders/stats` - Get order statistics

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - Get all users
- `GET /api/admin/orders` - Get all orders
- `PUT /api/admin/users/:id/role` - Update user role
- `GET /api/admin/analytics/sales` - Sales analytics
- `GET /api/admin/inventory` - Inventory report

## Step 4: Testing

### 4.1 Test Backend
```bash
# Test health endpoint
curl http://localhost:5000/health

# Test products endpoint
curl http://localhost:5000/api/products
```

### 4.2 Test Frontend Integration
1. Start React app: `npm start`
2. Try logging in with Firebase
3. Test adding items to cart
4. Test wishlist functionality

## Step 5: Deployment

### 5.1 Backend Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### 5.2 Update Production URLs
Update `.env` files for production:
- Backend: `FRONTEND_URL=https://your-domain.com`
- Frontend: `REACT_APP_API_URL=https://your-api-domain.com/api`

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure `FRONTEND_URL` in backend `.env` matches your React app URL
2. **Database Connection**: Verify PostgreSQL is running and credentials are correct
3. **Firebase Auth**: Ensure Firebase service account keys are properly formatted
4. **Token Issues**: Check that Firebase token is being stored in localStorage

### Debug Mode
Add this to your backend `.env` for debugging:
```
NODE_ENV=development
```

This will enable detailed error messages in API responses.

## Migration Checklist

- [ ] Backend server running on port 5000
- [ ] Database connected and seeded
- [ ] Firebase auth working with backend
- [ ] React app updated to use Express API
- [ ] All cart functionality working
- [ ] Wishlist functionality working
- [ ] Order creation working
- [ ] Admin panel accessible
- [ ] Production environment configured

## Support

If you encounter issues:
1. Check backend console logs
2. Verify database connection
3. Ensure Firebase configuration is correct
4. Check network requests in browser dev tools
