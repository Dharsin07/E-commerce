const { body, param, query, validationResult } = require('express-validator');

// Product creation validation
const createProductValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Product name is required')
    .isLength({ min: 2, max: 255 })
    .withMessage('Product name must be 2-255 characters'),
  
  body('slug')
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug must contain only lowercase letters, numbers, and hyphens'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Description must be less than 2000 characters'),
  
  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('category_id')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Category ID must be a positive integer'),
  
  body('stock')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Stock must be a non-negative integer'),
  
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  
  body('images')
    .optional()
    .isArray()
    .withMessage('Images must be an array'),
  
  body('images.*')
    .optional()
    .isURL()
    .withMessage('Each image must be a valid URL'),
  
  body('specifications')
    .optional()
    .isObject()
    .withMessage('Specifications must be an object'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .isString()
    .withMessage('Each tag must be a string')
];

// Product update validation
const updateProductValidation = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Product ID must be a positive integer'),
  
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Product name cannot be empty')
    .isLength({ min: 2, max: 255 })
    .withMessage('Product name must be 2-255 characters'),
  
  body('slug')
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug must contain only lowercase letters, numbers, and hyphens'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Description must be less than 2000 characters'),
  
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('category_id')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Category ID must be a positive integer'),
  
  body('stock')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Stock must be a non-negative integer'),
  
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  
  body('images')
    .optional()
    .isArray()
    .withMessage('Images must be an array'),
  
  body('images.*')
    .optional()
    .isURL()
    .withMessage('Each image must be a valid URL')
];

// Product ID validation
const productIdValidation = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Product ID must be a positive integer')
];

// Product query validation
const productQueryValidation = [
  query('category')
    .optional()
    .isString()
    .withMessage('Category must be a string'),
  
  query('search')
    .optional()
    .isString()
    .withMessage('Search query must be a string'),
  
  query('sort')
    .optional()
    .isIn(['name', 'price', 'created_at', 'updated_at', 'rating', 'stock'])
    .withMessage('Sort field is invalid'),
  
  query('order')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('Order must be asc or desc'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('offset')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Offset must be a non-negative integer'),
  
  query('minPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Minimum price must be a positive number'),
  
  query('maxPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Maximum price must be a positive number'),
  
  query('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  
  query('inStock')
    .optional()
    .isBoolean()
    .withMessage('In stock must be a boolean')
];

// Validation result handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors.array().map(error => ({
        field: error.param,
        message: error.message,
        value: error.value
      }))
    });
  }
  next();
};

module.exports = {
  createProductValidation,
  updateProductValidation,
  productIdValidation,
  productQueryValidation,
  handleValidationErrors
};
