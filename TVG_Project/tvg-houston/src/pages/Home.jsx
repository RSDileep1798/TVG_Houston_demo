import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="tag">
              <span className="tag-dot"></span>
              International Bottle Supply &amp; Logistics
            </div>
            <h1 className="hero-title">
              TVG Houston —{' '}
              <span>Premium bottle products</span> with safe delivery worldwide.
            </h1>
            <p className="hero-sub">
              We design and supply high-quality bottles for food, cosmetic and
              industrial use, with careful packing and safety-focused delivery
              to your destination anywhere across the globe.
            </p>

            <div className="hero-cta-row">
              <Link to="/services" className="btn">
                View Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Sales
              </Link>
            </div>

            <div className="hero-meta">
              <span>
                  Serving{' '}
                <strong>
                  North America, Europe, Middle East &amp; Asia
                </strong>
              </span>
              <span> Safety-checked, damage-controlled deliveries</span>
            </div>
          </div>

          <aside className="hero-card">
            <h3>Why buyers trust TVG Houston</h3>
            <p>
              Every shipment is checked for bottle integrity, packaging quality
              and accurate labelling before it leaves our facility.
            </p>
            <ul className="hero-card-list">
              <li>
                <span>◆</span>
                <span>
                  Durable bottles designed for liquids, oils, cosmetics and
                  chemicals.
                </span>
              </li>
              <li>
                <span>◆</span>
                <span>
                  Clear USD pricing, with size and dimension details for easy
                  planning.
                </span>
              </li>
              <li>
                <span>◆</span>
                <span>
                  Safe export packing to reduce breakage during international
                  transport.
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}