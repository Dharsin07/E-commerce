let firebaseAuth = null;
try {
  firebaseAuth = require('../config/firebase').auth;
  console.log('Firebase auth loaded successfully');
} catch (e) {
  console.log('Firebase auth not available:', e.message);
  firebaseAuth = null;
}

const decodeJwtPayload = (token) => {
  try {
    const parts = String(token).split('.');
    if (parts.length < 2) return null;
    const payload = parts[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const padded = payload + '='.repeat((4 - (payload.length % 4)) % 4);
    const json = Buffer.from(padded, 'base64').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
};

const authenticateToken = async (req, res, next) => {
  try {
    console.log('Auth middleware called, NODE_ENV:', process.env.NODE_ENV);
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    // For development, accept Firebase tokens without verification
    if (process.env.NODE_ENV !== 'production') {
      console.log('Using development auth mode');
      const decoded = decodeJwtPayload(token);
      const emailFromToken = decoded?.email;
      const uidFromToken = decoded?.user_id || decoded?.sub;
      
      req.user = {
        uid: uidFromToken || 'dev-user',
        email: emailFromToken || 'dev@example.com',
        claims: { dev: true, decoded }
      };
      return next();
    }

    if (firebaseAuth) {
      const decoded = await firebaseAuth.verifyIdToken(token);
      req.user = {
        uid: decoded.uid,
        email: decoded.email,
        claims: decoded
      };
      return next();
    }

    return res.status(500).json({ error: 'Auth not configured' });
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

const requireAdmin = (req, res, next) => {
  const email = req.user?.email;
  const claims = req.user?.claims || {};

  if (email === 'admin@luxe.com' || claims.admin === true) {
    return next();
  }

  return res.status(403).json({ error: 'Admin access required' });
};

module.exports = { authenticateToken, requireAdmin };
