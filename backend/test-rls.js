// Test RLS policy issue
require('dotenv').config();
const supabase = require('./src/config/supabase');

async function testRLS() {
  try {
    console.log('Testing RLS bypass with service role key...');
    console.log('Supabase URL:', process.env.SUPABASE_URL);
    console.log('Using service role key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    // Test insert with service role key (should bypass RLS)
    const testProduct = {
      name: 'Test Product',
      slug: 'test-product-' + Date.now(),
      description: 'Test description',
      price: 99.99,
      category_id: 1,
      images: ['https://example.com/test.jpg'],
      stock: 10
    };
    
    const { data, error } = await supabase
      .from('products')
      .insert(testProduct)
      .select()
      .single();
    
    if (error) {
      console.error('RLS Test Error:', error);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
    } else {
      console.log('RLS Test Success! Product created:', data);
      
      // Clean up test product
      await supabase
        .from('products')
        .delete()
        .eq('id', data.id);
    }
  } catch (err) {
    console.error('RLS test failed:', err.message);
  }
}

testRLS();
