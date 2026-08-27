import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>🌿 GreenNest</h2>
          <p>
            Bringing nature closer to every home with premium indoor and outdoor plants.
          </p>
        </div>

        <div className="footer-links">
          <h3>Shop</h3>
          <Link to="/indoor">Indoor Plants</Link>
          <Link to="/outdoor">Outdoor Plants</Link>
          <Link to="/pots">Pots</Link>
          <Link to="/fertilizer">Fertilizer</Link>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <Link to="/">FAQ</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Get weekly plant care tips.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 GreenNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;