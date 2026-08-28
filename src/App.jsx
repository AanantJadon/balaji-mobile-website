// ==========================================
// APP.JSX
// Main structure of the Balaji Mobile website
// ==========================================

import "./App.css";

function App() {
  return (
    <div className="website">

      {/* =====================================
          NAVBAR
          ===================================== */}

      <nav className="navbar">

        {/* Business name */}
        <div className="logo">
          BALAJI <span>MOBILE</span>
        </div>

        {/* Navigation links */}
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =====================================
          HERO
          Main introduction
          ===================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            MOBILE REPAIR • MANSAROVAR
          </p>

          <h1>
            Your phone,
            <br />
            <span>fixed right.</span>
          </h1>

          <p className="hero-description">
            Reliable mobile repair in Mansarovar, Jaipur.
            Hardware, software, screens, batteries and more.
          </p>

          {/* Rating */}
          <div className="rating">
            <strong>4.9 ★</strong>
            <span>Highly rated by our customers</span>
          </div>

          {/* Main buttons */}
          <div className="hero-buttons">

            <a
              href="https://wa.me/919828083083"
              className="button button-primary"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+919828083083"
              className="button button-secondary"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>


      {/* =====================================
          SERVICES
          ===================================== */}

      <section id="services" className="services">

        <div className="section-heading">

          <p className="section-label">
            OUR SERVICES
          </p>

          <h2>
            What can we fix?
          </h2>

        </div>


        <div className="service-grid">

          {/* Service 1 */}
          <div className="service-card">

            <div className="service-icon screen-icon">
              ▣
            </div>

            <h3>Screen Repair</h3>

            <p>
              Cracked, broken or damaged screens.
            </p>

          </div>


          {/* Service 2 */}
          <div className="service-card">

            <div className="service-icon battery-icon">
              +
            </div>

            <h3>Battery Replacement</h3>

            <p>
              Replace weak or damaged batteries.
            </p>

          </div>


          {/* Service 3 */}
          <div className="service-card">

            <div className="service-icon charge-icon">
              ⚡
            </div>

            <h3>Charging Repair</h3>

            <p>
              Charging port and charging problems.
            </p>

          </div>


          {/* Service 4 */}
          <div className="service-card">

            <div className="service-icon repair-icon">
              +
            </div>

            <h3>Hardware Repair</h3>

            <p>
              Professional hardware and motherboard repairs.
            </p>

          </div>


          {/* Service 5 */}
          <div className="service-card">

            <div className="service-icon water-icon">
              ◇
            </div>

            <h3>Water Damage</h3>

            <p>
              Diagnosis and repair for water-damaged phones.
            </p>

          </div>


          {/* Service 6 */}
          <div className="service-card">

            <div className="service-icon software-icon">
              /
            </div>

            <h3>Software Problems</h3>

            <p>
              Software issues, updates and troubleshooting.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          WHY CHOOSE US
          ===================================== */}

      <section className="why-us">

        <div className="section-heading">

          <p className="section-label">
            WHY BALAJI
          </p>

          <h2>
            Simple. Honest. Reliable.
          </h2>

        </div>


        <div className="trust-grid">

          <div className="trust-item">
            <div className="check">✓</div>

            <div>
              <h3>Experienced Technicians</h3>
              <p>
                Skilled professionals handling your device.
              </p>
            </div>

          </div>


          <div className="trust-item">
            <div className="check">✓</div>

            <div>
              <h3>Quality Repairs</h3>
              <p>
                Careful diagnosis before every repair.
              </p>
            </div>

          </div>


          <div className="trust-item">
            <div className="check">✓</div>

            <div>
              <h3>Multiple Brands</h3>
              <p>
                We work with a wide range of smartphones.
              </p>
            </div>

          </div>


          <div className="trust-item">
            <div className="check">✓</div>

            <div>
              <h3>Trusted Locally</h3>
              <p>
                Highly rated by customers in Jaipur.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          REVIEWS
          ===================================== */}

      <section id="reviews" className="reviews">

        <div className="section-heading">

          <p className="section-label">
            GOOGLE REVIEWS
          </p>

          <h2>
            Our customers say it best.
          </h2>

        </div>


        {/* Overall rating */}
        <div className="rating-box">

          <div className="rating-number">
            4.9
          </div>

          <div>
            <div className="stars">
              ★★★★★
            </div>

            <p>
              Google Customer Rating
            </p>
          </div>

        </div>


        {/* Temporary review placeholders */}
        <div className="review-grid">

          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              Add a real Google review here.
            </p>

            <strong>Customer Name</strong>
          </div>


          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              Add a real Google review here.
            </p>

            <strong>Customer Name</strong>
          </div>


          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              Add a real Google review here.
            </p>

            <strong>Customer Name</strong>
          </div>

        </div>


        <a
          href="https://www.google.com/maps/place/Balaji+Mobile+%26+Repairing+Center/"
          target="_blank"
          rel="noopener noreferrer"
          className="google-link"
        >
          View all Google reviews →
        </a>

      </section>


      {/* =====================================
          PROCESS
          ===================================== */}

      <section className="process">

        <div className="section-heading">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            Getting your phone fixed is easy.
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-step">
            <span>01</span>
            <h3>Contact</h3>
            <p>Call or WhatsApp us.</p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h3>Visit</h3>
            <p>Bring your device to our shop.</p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h3>Repair</h3>
            <p>We diagnose and repair it.</p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h3>Collect</h3>
            <p>Pick up your repaired device.</p>
          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT
          ===================================== */}

      <section id="contact" className="contact">

        <div className="contact-content">

          <p className="section-label">
            NEED A REPAIR?
          </p>

          <h2>
            Let's fix it.
          </h2>

          <p>
            Call or WhatsApp us and tell us what's
            wrong with your device.
          </p>


          <div className="contact-buttons">

            <a
              href="https://wa.me/919828083083"
              className="button button-primary"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+919828083083"
              className="button button-secondary"
            >
              98280 83083
            </a>

          </div>


          {/* Shop information */}
          <div className="shop-info">

            <div>
              <strong>VISIT US</strong>

              <p>
                124/188, Madhyam Marg<br />
                Thadi Market, Mansarovar<br />
                Jaipur, Rajasthan 302020
              </p>
            </div>


            <div>
              <strong>FIND US</strong>

              <a
                href="https://www.google.com/maps/place/Balaji+Mobile+%26+Repairing+Center/"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open Google Maps →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FOOTER
          ===================================== */}

      <footer>

        <div className="logo">
          BALAJI <span>MOBILE</span>
        </div>

        <p>
          Mobile Repair • Mansarovar, Jaipur
        </p>

        <p>
          © 2026 Balaji Mobile & Repairing Center
        </p>

      </footer>

    </div>
  );
}

export default App;