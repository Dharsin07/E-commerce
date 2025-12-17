-- Insert Categories
INSERT INTO public.categories (name, slug, description) VALUES
('Living Room', 'living-room', 'Sofas, chairs, and coffee tables'),
('Bedroom', 'bedroom', 'Beds, dressers, and nightstands'),
('Dining', 'dining', 'Tables, chairs, and storage')
ON CONFLICT (name) DO NOTHING;

-- Get Category IDs (these will be 1, 2, 3 in order)
INSERT INTO public.products (name, slug, description, price, category_id, images, stock, featured) VALUES
('Modern Sofa', 'modern-sofa', 'Comfortable 3-seater sofa', 799.99, 1, array['https://picsum.photos/300/200?random=1'], 10, true),
('Oak Dining Table', 'oak-dining-table', 'Solid oak dining table for 6', 1299.99, 3, array['https://picsum.photos/300/200?random=2'], 5, true),
('King Bed Frame', 'king-bed-frame', 'Sturdy wooden king size bed frame', 599.99, 2, array['https://picsum.photos/300/200?random=3'], 8, false),
('Coffee Table', 'coffee-table', 'Modern glass coffee table', 299.99, 1, array['https://picsum.photos/300/200?random=4'], 15, true),
('Office Chair', 'office-chair', 'Ergonomic office chair with lumbar support', 199.99, 1, array['https://picsum.photos/300/200?random=5'], 20, false),
('Bookshelf', 'bookshelf', '5-tier wooden bookshelf', 149.99, 2, array['https://picsum.photos/300/200?random=6'], 12, false),
('Dining Chair Set', 'dining-chairs', 'Set of 4 modern dining chairs', 399.99, 3, array['https://picsum.photos/300/200?random=7'], 8, true),
('Nightstand', 'nightstand', 'Wooden nightstand with drawer', 89.99, 2, array['https://picsum.photos/300/200?random=8'], 25, false)
ON CONFLICT (slug) DO NOTHING;
