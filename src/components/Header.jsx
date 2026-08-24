import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, wishlistItems, setIsCartOpen, setIsWishlistOpen } = useAppContext();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    setIsSearchOpen(false);
    setSearchQuery('');
    if (q) {
      navigate(`/collections?search=${encodeURIComponent(q)}`);
    } else {
      navigate('/collections');
    }
  };

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
            <li className="nav-item">
              <Link to="/collections" className="nav-link" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            </li>
            <li className="nav-item"><Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="header-actions">
          <button className="action-icon-btn" onClick={() => { setIsSearchOpen(!isSearchOpen); setSearchQuery(''); }} title="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <a href="#" className="action-icon-btn" title="Wishlist" onClick={(e) => { e.preventDefault(); setIsWishlistOpen(true); }}>
            <i className="fa-regular fa-heart"></i>
            {wishlistItems?.length > 0 && <span className="cart-badge">{wishlistItems.length}</span>}
          </a>
          <Link to="/account" className="action-icon-btn account-btn" title="Account">
            <i className="fa-regular fa-user"></i>
          </Link>
          <button className="action-icon-btn" title="Shopping Cart" onClick={() => setIsCartOpen(true)}>
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="cart-badge">{cartItems?.length || 0}</span>
          </button>
        </div>
      </div>

      {/* Search Overlay Bar — like old site */}
      {isSearchOpen && (
        <div className="search-overlay-bar active" style={{ display: 'block' }}>
          <form className="search-overlay-container" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-overlay-input"
              placeholder="Search for Sarees, Lehengas, Sherwanis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="search-overlay-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button type="button" className="search-overlay-close-btn" onClick={() => setIsSearchOpen(false)}><i className="fa-solid fa-xmark"></i></button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
