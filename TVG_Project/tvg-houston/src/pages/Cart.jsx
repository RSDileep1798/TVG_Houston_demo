import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity) || quantity < 1) {
      return;
    }
    updateQuantity(productId, quantity);
  };

  if (cartItems.length === 0) {
    return (
      <section className="services section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="section-heading">
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/products" className="btn">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        <div className="section-heading">
          <h2>Your Cart</h2>
          <p>Review your selected products below.</p>
        </div>

        <div className="product-grid">
          {cartItems.map((item) => {
            // Extract numeric price from string like "$10.90 / pack of 6"
            const priceMatch = item.price.match(/\$?([\d.]+)/);
            const unitPrice = priceMatch ? parseFloat(priceMatch[1]) : 0;
            const itemTotal = unitPrice * item.quantity;

            return (
              <article key={item.id} className="product-card">
                <div className="product-image">
                  <img src="/images/bottle1.jpeg" alt={item.name} />
                </div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{item.price}</div>
                <div className="product-meta">
                  <div>
                    <strong>Quantity:</strong>{' '}
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      style={{
                        width: '60px',
                        padding: '0.3rem',
                        marginLeft: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                  <div>
                    <strong>Item Total:</strong> ${itemTotal.toFixed(2)}
                  </div>
                  <div>
                    <strong>Use:</strong> {item.use}
                  </div>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginTop: '0.5rem' }}
                >
                  Remove from Cart
                </button>
              </article>
            );
          })}
        </div>

        <div className="cart-summary">
          <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            <strong>Cart Total:</strong> ${getCartTotal().toFixed(2)}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} item(s) in cart
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/products" className="btn btn-secondary">
            Continue Shopping
          </Link>{' '}
          <button
            className="btn"
            style={{ marginLeft: '0.7rem' }}
            onClick={() => {
              if (window.confirm('Proceed to checkout?')) {
                alert('Checkout functionality coming soon!');
              }
            }}
          >
            Proceed to Checkout
          </button>
          {cartItems.length > 0 && (
            <button
              className="btn btn-secondary"
              style={{ marginLeft: '0.7rem' }}
              onClick={() => {
                if (window.confirm('Clear all items from cart?')) {
                  clearCart();
                }
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}