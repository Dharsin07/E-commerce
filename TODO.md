# TODO List for Fixing Review and Contact Issues

## 1. Update ProductCard.jsx
- [x] Add "View Collection" and "Write Review" buttons below the "Add to Cart" button
- [x] Ensure buttons have proper styling and event handlers

## 2. Update App.jsx
- [x] Add state to load and manage reviews from localStorage
- [x] Add onViewCollection handler to navigate to /collection/:type
- [x] Add onWriteReview handler to navigate to /write-review
- [x] Pass these handlers and reviewsByProduct to Home, then to Products

## 3. Update Footer.jsx
- [x] Add a dedicated contact details section with address, phone, and email
- [x] Ensure contact info is properly styled and accessible

## 4. Testing
- [x] App compiles successfully and runs at localhost:3000
- [x] Code changes implemented without errors
- [x] Navigation handlers and state management added
