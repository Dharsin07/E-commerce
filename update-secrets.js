const crypto = require('crypto');

// Generate secure secrets
const secrets = {
  JWT_SECRET: crypto.randomBytes(64).toString('hex'),
  AUTH_SECRET: crypto.randomBytes(64).toString('hex'),
  COOKIE_SECRET: crypto.randomBytes(64).toString('hex')
};

console.log('Generated JWT Secrets:');
console.log('=====================');
Object.entries(secrets).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});
console.log('\nCopy these to your .env file or Render environment variables');
