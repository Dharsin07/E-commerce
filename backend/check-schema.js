// Check products table schema
require('dotenv').config();
const supabase = require('./src/config/supabase');

async function checkSchema() {
  try {
    console.log('Checking products table schema...');
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    if (data.length > 0) {
      console.log('Products table columns:', Object.keys(data[0]));
      console.log('Sample product:', JSON.stringify(data[0], null, 2));
    } else {
      console.log('No products found, checking table structure...');
      
      // Try to get table info
      const { data: tableInfo, error: tableError } = await supabase
        .from('products')
        .select('id, name, slug, description, price, category_id, images, stock, created_at, updated_at')
        .limit(1);
      
      if (!tableError) {
        console.log('Table structure check successful');
      } else {
        console.error('Table structure error:', tableError);
      }
    }
  } catch (err) {
    console.error('Schema check failed:', err.message);
  }
}

checkSchema();
