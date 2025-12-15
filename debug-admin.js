// Debug admin authentication
console.log('=== Admin Authentication Debug ===');

// Check if user is logged in and has admin role
const user = JSON.parse(localStorage.getItem('user') || 'null');
console.log('User from localStorage:', user);
console.log('Is authenticated:', !!user);
console.log('Is admin:', user?.role === 'admin');

// Check Firebase token
const token = localStorage.getItem('firebaseToken');
console.log('Has Firebase token:', !!token);

// Admin email check (backend should also accept admin@luxe.com)
console.log('User email:', user?.email);
console.log('Is admin email:', user?.email === 'admin@luxe.com');

console.log('=== End Debug ===');
