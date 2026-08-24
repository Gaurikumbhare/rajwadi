import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems, wishlistItems, setIsCartOpen, setIsWishlistOpen } = useAppContext();
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className="action-icon-btn mobile-menu-btn" 
          onClick={() => setIsMenuOpen(true)}
          title="Menu" 
          style={{ marginRight: '15px', color: 'var(--color-gold)', fontSize: '28px' }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Brand Logo */}
        <Link to="/" className="logo-area" onClick={() => setIsMenuOpen(false)}>
          <img src="https://www.rajwadi.com/static/version1780378735/frontend/Aureatelabs/rajwadi/en_US/images/logo.svg" alt="Rajwadi Logo Desktop" style={{ height: '45px', width: 'auto', border: 'none', background: 'transparent', borderRadius: 0, padding: 0, boxShadow: 'none' }} className="logo-desktop" />
          <img src="https://www.rajwadi.com/static/version1780378735/frontend/Aureatelabs/rajwadi/en_US/images/logo.svg" alt="Rajwadi Logo Mobile" style={{ height: '35px', width: 'auto', border: 'none', background: 'transparent', borderRadius: 0, padding: 0, boxShadow: 'none' }} className="logo-mobile" />
        </Link>

        {/* Category Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay active" onClick={() => setIsMenuOpen(false)}></div>
        )}
        <nav className={`nav-categories-header ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-drawer-header">
            <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <img src="https://www.rajwadi.com/static/version1780378735/frontend/Aureatelabs/rajwadi/en_US/images/logo.svg" alt="Rajwadi Logo" style={{ height: '30px', width: 'auto', marginRight: '15px' }} />
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li className="nav-item"><Link to="/story" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Story</Link></li>
            <li className={`nav-item has-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <div className="nav-link-wrapper">
                <Link 
                  to="/collections" 
                  className="nav-link" 
                  onClick={(e) => {
                    if (isMenuOpen) {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                >
                  Collections
                </Link>
                <button 
                  className="mobile-submenu-toggle" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><Link to="/collections?category=Saree" onClick={() => setIsMenuOpen(false)}>Saree</Link></li>
                <li><Link to="/collections?category=Lehenga" onClick={() => setIsMenuOpen(false)}>Lehenga Choli</Link></li>
                <li><Link to="/collections?category=Salwar Kameez" onClick={() => setIsMenuOpen(false)}>Salwar Kameez</Link></li>
                <li><Link to="/collections?category=Sherwani" onClick={() => setIsMenuOpen(false)}>Grooms Wear</Link></li>
                <li><Link to="/collections" onClick={() => setIsMenuOpen(false)}>All Catalog</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="header-actions">
          <button className="action-icon-btn" onClick={() => setIsSearchOpen(true)} title="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <a href="#" className="action-icon-btn" title="Wishlist" onClick={(e) => { e.preventDefault(); setIsWishlistOpen(true); }}>
            <i className="fa-regular fa-heart"></i>
            {wishlistItems?.length > 0 && <span className="cart-badge">{wishlistItems.length}</span>}
          </a>
          <a href="#" className="action-icon-btn account-btn" title="Account" onClick={(e) => { e.preventDefault(); alert('Account authentication portal coming soon!'); }}>
            <i className="fa-regular fa-user"></i>
          </a>
          <button className="action-icon-btn" title="Shopping Cart" onClick={() => setIsCartOpen(true)}>
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="cart-badge">{cartItems?.length || 0}</span>
          </button>
        </div>
      </div>

      {/* Dropdown/Slide-down Search Overlay Bar */}
      {isSearchOpen && (
        <div className="search-overlay-bar" style={{ display: 'block' }}>
          <div className="search-overlay-container">
            <input type="text" className="search-overlay-input" placeholder="Search for Sarees, Lehengas, Sherwanis..." />
            <button className="search-overlay-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="search-overlay-close-btn" onClick={() => setIsSearchOpen(false)}><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
