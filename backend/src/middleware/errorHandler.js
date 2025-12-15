const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Default error
  let error = { ...err };
  error.message = err.message;

  // PostgreSQL constraint violation
  if (err.code === '23505') {
    const message = 'Duplicate entry found';
    error = { message, statusCode: 400 };
  }

  // PostgreSQL foreign key violation
  if (err.code === '23503') {
    const message = 'Referenced record not found';
    error = { message, statusCode: 400 };
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = { message, statusCode: 401 };
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = { message, statusCode: 401 };
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
