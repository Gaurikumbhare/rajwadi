import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import productsData from '../data/products';

const WishlistDrawer = () => {
  const { isWishlistOpen, setIsWishlistOpen, wishlistItems, toggleWishlist } = useAppContext();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsWishlistOpen(false);
  };

  // Map product IDs to actual product data
  const wishlistProducts = wishlistItems.map(id => productsData.find(p => p.id === id)).filter(Boolean);

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isWishlistOpen ? 'active' : ''}`} 
        onClick={handleClose}
        style={{ zIndex: 1000 }}
      ></div>
      
      <div className={`cart-drawer ${isWishlistOpen ? 'active' : ''}`} style={{ zIndex: 1001 }}>
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">YOUR WISHLIST ({wishlistProducts.length})</h2>
          <button className="cart-close-btn" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="cart-drawer-body">
          {wishlistProducts.length === 0 ? (
            <div className="cart-empty-message">
              <i className="fa-regular fa-heart cart-empty-icon" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}></i>
              <p>Your wishlist is empty.</p>
              <button 
                className="btn-gold" 
                style={{ marginTop: '20px', padding: '10px 20px' }}
                onClick={() => {
                  handleClose();
                  navigate('/collections');
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {wishlistProducts.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img" style={{ cursor: 'pointer' }} onClick={() => { handleClose(); navigate(`/product/${item.id}`); }}>
                    <img src={'/' + item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-title" style={{ cursor: 'pointer' }} onClick={() => { handleClose(); navigate(`/product/${item.id}`); }}>{item.name}</h4>
                    <div className="cart-item-price-qty" style={{ marginTop: '10px' }}>
                      <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
                    </div>
                    <button className="cart-remove-btn" onClick={() => toggleWishlist(item.id)} style={{ marginTop: '15px' }}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;
