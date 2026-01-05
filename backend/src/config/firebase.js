const admin = require('firebase-admin');

let auth = null;

// Only initialize Firebase if all required credentials are available
const hasValidCredentials = () => {
  return !!(
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY &&
    process.env.FIREBASE_PRIVATE_KEY !== 'PASTE_YOUR_FIREBASE_PRIVATE_KEY_HERE' &&
    process.env.FIREBASE_PRIVATE_KEY.includes('BEGIN PRIVATE KEY')
  );
};

if (hasValidCredentials()) {
  try {
    const serviceAccount = {
      project_id: process.env.FIREBASE_PROJECT_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    };

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      auth = admin.auth();
      console.log('Firebase Admin SDK initialized successfully');
    }
  } catch (error) {
    console.error('Failed to initialize Firebase Admin SDK:', error.message);
    auth = null;
  }
} else {
  console.warn('Firebase credentials not configured or incomplete. Auth features will be limited.');
  auth = null;
}

module.exports = { auth };
