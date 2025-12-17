const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Use service role key for admin operations (bypasses RLS)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Insert categories
    console.log('Inserting categories...');
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .upsert([
        { name: 'Living Room', slug: 'living-room', description: 'Sofas, chairs, and coffee tables' },
        { name: 'Bedroom', slug: 'bedroom', description: 'Beds, dressers, and nightstands' },
        { name: 'Dining', slug: 'dining', description: 'Tables, chairs, and storage' }
      ])
      .select();

    if (categoriesError) {
      console.error('Error inserting categories:', categoriesError);
      return;
    }
    console.log('Categories inserted successfully:', categories);

    // Get category IDs
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.slug] = cat.id;
    });

    // Insert products
    console.log('Inserting products...');
    const products = [
      {
        name: 'Modern Sofa',
        slug: 'modern-sofa',
        description: 'Comfortable 3-seater sofa',
        price: 799.99,
        category_id: categoryMap['living-room'],
        images: ['https://picsum.photos/300/200?random=1'],
        stock: 10,
        featured: true
      },
      {
        name: 'Oak Dining Table',
        slug: 'oak-dining-table',
        description: 'Solid oak dining table for 6',
        price: 1299.99,
        category_id: categoryMap['dining'],
        images: ['https://picsum.photos/300/200?random=2'],
        stock: 5,
        featured: true
      },
      {
        name: 'King Bed Frame',
        slug: 'king-bed-frame',
        description: 'Sturdy wooden king size bed frame',
        price: 599.99,
        category_id: categoryMap['bedroom'],
        images: ['https://picsum.photos/300/200?random=3'],
        stock: 8,
        featured: false
      },
      {
        name: 'Coffee Table',
        slug: 'coffee-table',
        description: 'Modern glass coffee table',
        price: 299.99,
        category_id: categoryMap['living-room'],
        images: ['https://picsum.photos/300/200?random=4'],
        stock: 15,
        featured: true
      },
      {
        name: 'Office Chair',
        slug: 'office-chair',
        description: 'Ergonomic office chair with lumbar support',
        price: 199.99,
        category_id: categoryMap['living-room'],
        images: ['https://picsum.photos/300/200?random=5'],
        stock: 20,
        featured: false
      },
      {
        name: 'Bookshelf',
        slug: 'bookshelf',
        description: '5-tier wooden bookshelf',
        price: 149.99,
        category_id: categoryMap['bedroom'],
        images: ['https://picsum.photos/300/200?random=6'],
        stock: 12,
        featured: false
      },
      {
        name: 'Dining Chair Set',
        slug: 'dining-chairs',
        description: 'Set of 4 modern dining chairs',
        price: 399.99,
        category_id: categoryMap['dining'],
        images: ['https://picsum.photos/300/200?random=7'],
        stock: 8,
        featured: true
      },
      {
        name: 'Nightstand',
        slug: 'nightstand',
        description: 'Wooden nightstand with drawer',
        price: 89.99,
        category_id: categoryMap['bedroom'],
        images: ['https://picsum.photos/300/200?random=8'],
        stock: 25,
        featured: false
      }
    ];

    const { data: insertedProducts, error: productsError } = await supabase
      .from('products')
      .upsert(products, { onConflict: 'slug' })
      .select();

    if (productsError) {
      console.error('Error inserting products:', productsError);
      return;
    }

    console.log(`Successfully inserted ${insertedProducts.length} products:`, insertedProducts.map(p => p.name));
    console.log('Database seeding completed successfully!');

  } catch (error) {
    console.error('Database seeding failed:', error);
  }
}

// Run the seeding
seedDatabase();
