import React from 'react';

export default function Industries() {
  return (
    <section id="industries" className="industries section">
      <div className="container">
        <div className="section-heading">
          <h2>Industries we serve</h2>
          <p>
            Our bottle solutions support both retail brands and heavy industry,
            with quality and safety at every step.
          </p>
        </div>

        <div className="industries-grid">
          <article className="industry-card">
            <h3>Food &amp; Beverage</h3>
            <p>
              Bottles for juices, sauces, oils and specialty drinks, with
              food-grade materials and tamper-evident options.
            </p>
          </article>

          <article className="industry-card">
            <h3>Chemical &amp; Industrial</h3>
            <p>
              Robust containers engineered for chemicals, lubricants, detergents
              and lab environments, designed for safe handling.
            </p>
          </article>

          <article className="industry-card">
            <h3>Cosmetics &amp; Personal Care</h3>
            <p>
              Premium packaging for shampoos, lotions, serums and oils, ready
              for both local and international markets.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}