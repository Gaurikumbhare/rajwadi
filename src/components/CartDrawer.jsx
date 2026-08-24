import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity } = useAppContext();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  };

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isCartOpen ? 'active' : ''}`} 
        onClick={handleClose}
      ></div>
      
      <div className={`cart-drawer ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">YOUR BAG ({cartItems.length})</h2>
          <button className="cart-close-btn" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-message">
              <i className="fa-solid fa-bag-shopping cart-empty-icon"></i>
              <p>Your shopping bag is empty.</p>
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
              {cartItems.map((item) => (
                <div key={item.variantId} className="cart-item">
                  <div className="cart-item-img">
                    <img src={'/' + item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <div className="cart-item-meta">
                      <span>{item.stitchingOption.toUpperCase()}</span>
                    </div>
                    <div className="cart-item-price-qty">
                      <div className="cart-qty-controls">
                        <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>+</button>
                      </div>
                      <div className="cart-item-price">₹{(item.finalPrice * item.quantity).toFixed(2)}</div>
                    </div>
                    <button className="cart-remove-btn" onClick={() => removeFromCart(item.variantId)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-row cart-total-row">
              <span>SUBTOTAL</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginBottom: '15px' }}>
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-add-cart" style={{ width: '100%' }}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
