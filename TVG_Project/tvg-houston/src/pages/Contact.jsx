import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-heading">
          <h2>Contact TVG Houston</h2>
          <p>
            Send us your requirements and we’ll prepare bottle options, USD
            pricing and a safe delivery plan for your destination.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+18320000000">+1 (832) 000-0000</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:sales@tvghouston.com">sales@tvghouston.com</a>
            </p>
            <p>
              <strong>Location:</strong>
              <br />
              TVG Houston
              <br />
              Energy Commerce Park
              <br />
              Houston, Texas, USA
            </p>
            <p style={{ marginTop: '1rem' }}>
              We manage safe packing, documentation and coordination with
              carriers to reduce risk and bring your products to port, warehouse
              or distribution center in the best possible condition.
            </p>
          </div>

          <div className="contact-card">
            <form>
              <div className="field-group">
                <label className="field-label">Full name</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field-group">
                <label className="field-label">Business email</label>
                <input
                  className="field-input"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="field-group">
                <label className="field-label">Country / destination</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="e.g. USA, Germany, UAE"
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  What are you looking for?
                </label>
                <textarea
                  className="field-textarea"
                  placeholder="Bottle type, sizes, quantities, delivery deadline..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                style={{ width: '100%', marginTop: '0.4rem' }}
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}