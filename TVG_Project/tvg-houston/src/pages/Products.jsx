import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Matte Green Bottle · 500 ml',
    price: '$10.90 / pack of 6',
    size: 'Height 20 cm · Width 6.5 cm',
    use: 'Water, health drinks, oils, cosmetics',
  },
  {
    id: 2,
    name: 'Matte Green Bottle · 750 ml',
    price: '$14.90 / pack of 6',
    size: 'Height 25 cm · Width 7.5 cm',
    use: 'Water, oil, beverages, cosmetic liquids',
  },
  {
    id: 3,
    name: 'Matte Green Bottle · 1 Liter',
    price: '$18.50 / pack of 4',
    size: 'Height 30 cm · Width 8.5 cm',
    use: 'Water, cold drinks, kitchen liquids, oils',
  },
  {
    id: 4,
    name: 'Matte Green Bottle · 5 Liters',
    price: '$22.90 / pack of 2',
    size: 'Height 38 cm · Width 15 cm',
    use: 'Industrial liquid, oil, chemical, bulk storage',
  },
];

export default function Products() {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-heading">
          <h2>Products</h2>
          <p>Browse our sample range of export-safe bottle products.</p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-image">
                <img src="/images/bottle1.jpeg" alt={p.name} />
              </div>
              <div className="product-name">{p.name}</div>
              <div className="product-price">{p.price}</div>
              <div className="product-meta">
                <div>
                  <strong>Size:</strong> {p.size}
                </div>
                <div>
                  <strong>Use:</strong> {p.use}
                </div>
              </div>
              <button className="add-cart-btn">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}