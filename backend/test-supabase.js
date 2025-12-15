// Test Supabase connection
require('dotenv').config();
const supabase = require('./src/config/supabase');

async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    console.log('Supabase URL:', process.env.SUPABASE_URL);
    console.log('Has Service Role Key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    const { data, error } = await supabase
      .from('products')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error);
    } else {
      console.log('Supabase connection successful!');
      console.log('Data:', data);
    }
  } catch (err) {
    console.error('Connection test failed:', err.message);
  }
}

testSupabaseConnection();
