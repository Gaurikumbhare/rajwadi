import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo-wrapper">
            <img 
              src="https://www.rajwadi.com/static/version1780378735/frontend/Aureatelabs/rajwadi/en_US/images/logo.svg" 
              alt="Rajwadi" 
              className="footer-logo"
            />
          </div>
          <h3 className="footer-brand-title">Rajwadi Collections</h3>
          <p className="footer-brand-desc">
            Bringing authentic Indian heritage fashion, handcrafted sarees, intricate lehengas, and royal groom sherwanis right to your doorstep globally.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaFacebookF size={16} /></a>
            <a href="#" className="social-icon"><FaInstagram size={16} /></a>
            <a href="#" className="social-icon"><FaPinterestP size={16} /></a>
            <a href="#" className="social-icon"><FaYoutube size={16} /></a>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-links">
            <li><Link to="/collections?category=Saree">Sarees</Link></li>
            <li><Link to="/collections?category=Lehenga">Lehenga Choli</Link></li>
            <li><Link to="/collections?category=Salwar Kameez">Salwar Kameez</Link></li>
            <li><Link to="/collections?category=Sherwani">Grooms Wear / Sherwanis</Link></li>
            <li><Link to="/collections">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Customer Care</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="#">Shipping Policy</Link></li>
            <li><Link to="#">Custom Stitching Guide</Link></li>
            <li><Link to="#">Return & Exchanges</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-newsletter-text">
            Subscribe to get early notifications of seasonal collections and royal sales.
          </p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Rajwadi Royal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
