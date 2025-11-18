import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            We support you from product selection to final delivery, making
            international bottle sourcing simple and secure.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-tag">Consulting</div>
            <h3>Product selection &amp; sizing</h3>
            <p>
              Get help selecting bottle type, capacity, height and width that
              match your product, filling lines and branding.
            </p>
          </article>

          <article className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-tag">Packaging</div>
            <h3>Safety-first export packing</h3>
            <p>
              We use reinforced cartons, dividers and pallets to protect bottles
              from impact, vibration and stacking pressure.
            </p>
          </article>

          <article className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="service-tag">Logistics</div>
            <h3>International shipping</h3>
            <p>
              Sea and air freight options with tracking and documentation to
              move your products safely to ports and warehouses worldwide.
            </p>
          </article>
        </div>

        {/* PRODUCTS */}
        <div className="products">
          <div className="products-title-row">
            <h3>Sample bottle products</h3>
            <span>
              All prices in USD · Dimensions include approximate height and
              width.
            </span>
          </div>

          <div className="product-grid">
            {/* 500 ml */}
            <article className="product-card">
              <div className="product-image">
                <img
                  src="/images/bottle1.jpeg"
                  alt="Matte green bottle 500 ml"
                />
              </div>
              <div className="product-name">Matte Green Bottle · 500 ml</div>
              <div className="product-price">$10.90 / pack of 6</div>
              <div className="product-meta">
                <div>
                  <strong>Size:</strong> Height 20 cm · Width 6.5 cm
                </div>
                <div>
                  <strong>Use:</strong> Water, health drinks, oils, cosmetics
                </div>
              </div>
              <div className="product-cta">
                   Premium finish · Export-safe packaging
              </div>
              <button className="add-cart-btn">Add to Cart</button>
            </article>

            {/* 750 ml */}
            <article className="product-card">
              <div className="product-image">
                <img
                  src="/images/bottle1.jpeg"
                  alt="Matte green bottle 750 ml"
                />
              </div>
              <div className="product-name">Matte Green Bottle · 750 ml</div>
              <div className="product-price">$14.90 / pack of 6</div>
              <div className="product-meta">
                <div>
                  <strong>Size:</strong> Height 25 cm · Width 7.5 cm
                </div>
                <div>
                  <strong>Use:</strong> Water, oil, beverages, cosmetic liquids
                </div>
              </div>
              <div className="product-cta">
                   Premium finish · Export-safe packaging
              </div>
              <button className="add-cart-btn">Add to Cart</button>
            </article>

            {/* 1 L */}
            <article className="product-card">
              <div className="product-image">
                <img
                  src="/images/bottle1.jpeg"
                  alt="Matte green bottle 1 liter"
                />
              </div>
              <div className="product-name">Matte Green Bottle · 1 Liter</div>
              <div className="product-price">$18.50 / pack of 4</div>
              <div className="product-meta">
                <div>
                  <strong>Size:</strong> Height 30 cm · Width 8.5 cm
                </div>
                <div>
                  <strong>Use:</strong> Water, cold drinks, kitchen liquids,
                  oils
                </div>
              </div>
              <div className="product-cta">
                   Strong material · Ideal for exporting
              </div>
              <button className="add-cart-btn">Add to Cart</button>
            </article>

            {/* 5 L */}
            <article className="product-card">
              <div className="product-image">
                <img
                  src="/images/bottle1.jpeg"
                  alt="Matte green bottle 5 liters"
                />
              </div>
              <div className="product-name">Matte Green Bottle · 5 Liters</div>
              <div className="product-price">$22.90 / pack of 2</div>
              <div className="product-meta">
                <div>
                  <strong>Size:</strong> Height 38 cm · Width 15 cm
                </div>
                <div>
                  <strong>Use:</strong> Industrial liquid, oil, chemical, bulk
                  storage
                </div>
              </div>
              <div className="product-cta">
                   Heavy-duty · Safe for transport
              </div>
              <button className="add-cart-btn">Add to Cart</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}