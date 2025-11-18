import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <section className="services section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        <div className="section-heading">
          <h2>Your Cart</h2>
          <p>These are the sample products currently in your cart.</p>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-image">
              <img src="/images/bottle1.jpeg" alt="Matte green bottle 500 ml" />
            </div>
            <div className="product-name">Matte Green Bottle · 500 ml</div>
            <div className="product-price">$10.90 / pack of 6</div>
            <div className="product-meta">
              <div>
                <strong>Quantity:</strong> 1 pack
              </div>
              <div>
                <strong>Use:</strong> Water, health drinks, oils, cosmetics
              </div>
            </div>
          </article>
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>
          <strong>Total:</strong> $10.90
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/services" className="btn btn-secondary">
            Continue Shopping
          </Link>{' '}
          <button className="btn" style={{ marginLeft: '0.7rem' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}