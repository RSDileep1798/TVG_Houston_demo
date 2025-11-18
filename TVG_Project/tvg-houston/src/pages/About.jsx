import React from 'react';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-heading">
          <h2>About TVG Houston</h2>
          <p>
            TVG Houston is a global partner for bottle products, combining
            strong manufacturing standards with reliable international shipping.
          </p>
        </div>

        <div className="about-grid">
          <div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              From small cosmetic bottles to large industrial containers, we
              focus on clarity, strength and consistency. Our team works closely
              with you to choose the correct size, material and packaging so
              your order arrives ready to fill, label and ship to your own
              customers.
            </p>
            <div className="pill-row">
              <span className="pill">High-clarity PET &amp; glass bottles</span>
              <span className="pill">Industrial HDPE containers</span>
              <span className="pill">Food-grade certified options</span>
              <span className="pill">Safe export-ready packing</span>
            </div>
          </div>

          <div className="about-card">
            <strong
              style={{
                display: 'block',
                marginBottom: '0.4rem',
                color: 'var(--color-primary)',
              }}
            >
              Our quality &amp; safety standard
            </strong>
            <p>
              • Each batch checked for defects, capacity and finish.<br />
              • Clear documentation and USD pricing for easy purchasing.<br />
              • Strong cartons and pallets designed to protect during transit.
              <br />
              • Dedicated support for new projects and recurring orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}