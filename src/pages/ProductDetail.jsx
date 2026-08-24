import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products';
import { useAppContext } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useAppContext();
  const [product, setProduct] = useState(null);
  const [stitchingOption, setStitchingOption] = useState('unstitched');

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // set default stitching option if available
      if (foundProduct.stitchingOptions && foundProduct.stitchingOptions.length > 0) {
        setStitchingOption(foundProduct.stitchingOptions[0]);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/collections')} className="btn-gold">Back to Collections</button>
      </div>
    );
  }

  // Thumbnails simulation (for visual match with screenshot)
  const thumbnails = [
    product.image, // main image
    'assets/images/mehndi_look.png', // simulated green variant
    'assets/images/sangeet_look.png', // simulated blue variant
  ];

  return (
    <section className="product-detail-section">
      <div className="pd-container">
        <div className="pd-grid">
          
          {/* Left Column: Images */}
          <div className="pd-image-col">
            <div className="pd-main-image-wrapper">
              <img src={'/' + product.image} alt={product.name} className="pd-main-image" />
              <button className="pd-wishlist-btn"><i className="fa-regular fa-heart"></i></button>
            </div>
            
            <div className="pd-thumbnails">
              {thumbnails.map((thumb, index) => (
                <div key={index} className={`pd-thumbnail ${index === 0 ? 'active' : ''}`}>
                  <img src={'/' + thumb} alt={`${product.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="pd-info-col">
            <div className="pd-category">{product.category}</div>
            <h1 className="pd-title">{product.name}</h1>
            
            <div className="pd-rating-row">
              <div className="pd-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <span className="pd-reviews">({product.reviews || 42} customer reviews)</span>
            </div>

            <div className="pd-price">
              ₹{(product.price + (stitchingOption === 'standard' ? 20 : stitchingOption === 'custom' ? 50 : 0)).toFixed(2)}
            </div>
            
            <hr className="pd-divider" />
            
            <p className="pd-desc">
              {product.description || `A spectacular royal ${product.color?.toLowerCase()} ${product.category?.toLowerCase()} crafted in premium ${product.fabric?.toLowerCase()}, adorned with heavy zari, stones, and dabka hand embroidery.`}
            </p>

            <div className="pd-specs-box">
              <div className="pd-spec-item">
                <span className="pd-spec-label">Fabric:</span> {product.fabric}
              </div>
              <div className="pd-spec-item">
                <span className="pd-spec-label">Color:</span> {product.color}
              </div>
              <div className="pd-spec-item">
                <span className="pd-spec-label">Work:</span> Intricate Embroidery
              </div>
              <div className="pd-spec-item">
                <span className="pd-spec-label">Availability:</span> In Stock
              </div>
            </div>

            <h3 className="pd-stitching-title">STITCHING & CUSTOMIZATION</h3>
            <div className="pd-stitching-options">
              <button 
                className={`pd-stitch-btn ${stitchingOption === 'unstitched' ? 'active' : ''}`}
                onClick={() => setStitchingOption('unstitched')}
              >
                UNSTITCHED FABRIC (+₹0)
              </button>
              <button 
                className={`pd-stitch-btn ${stitchingOption === 'standard' ? 'active' : ''}`}
                onClick={() => setStitchingOption('standard')}
              >
                STANDARD SIZE (+₹20)
              </button>
              <button 
                className={`pd-stitch-btn ${stitchingOption === 'custom' ? 'active' : ''}`}
                onClick={() => setStitchingOption('custom')}
              >
                CUSTOM TAILORING (+₹50)
              </button>
            </div>

            <div className="pd-shipping-info">
              {stitchingOption === 'unstitched' && (
                <p>The product will be shipped as unstitched fabric dress materials, sarees with unstitched blouse piece, or unhemmed garments.</p>
              )}
              {stitchingOption === 'standard' && (
                <div className="pd-standard-panel">
                  <label>Select Standard Size</label>
                  <select>
                    <option>XS (Chest: 34 inch)</option>
                    <option>S (Chest: 36 inch)</option>
                    <option>M (Chest: 38 inch)</option>
                    <option>L (Chest: 40 inch)</option>
                    <option>XL (Chest: 42 inch)</option>
                    <option>XXL (Chest: 44 inch)</option>
                  </select>
                </div>
              )}
              {stitchingOption === 'custom' && (
                <div className="pd-custom-panel">
                  <div className="pd-measure-group">
                    <label>Bust / Chest (inches)</label>
                    <input type="number" min="30" max="60" placeholder="e.g. 36" />
                  </div>
                  <div className="pd-measure-group">
                    <label>Waist (inches)</label>
                    <input type="number" min="24" max="55" placeholder="e.g. 30" />
                  </div>
                  <div className="pd-measure-group">
                    <label>Height (ft/inches)</label>
                    <input type="text" placeholder="e.g. 5ft 4in" />
                  </div>
                  <div className="pd-measure-group">
                    <label>Shoulder Width (inches)</label>
                    <input type="number" min="10" max="25" placeholder="e.g. 15" />
                  </div>
                  <div className="pd-measure-group full-width">
                    <label>Special Tailoring Instructions</label>
                    <input type="text" placeholder="e.g. Make sleeves full length, high neck collar." />
                  </div>
                </div>
              )}
            </div>

            <button 
              className="pd-add-to-cart-btn"
              onClick={() => {
                const priceModifier = stitchingOption === 'standard' ? 20 : stitchingOption === 'custom' ? 50 : 0;
                addToCart(product, stitchingOption, priceModifier);
              }}
            >
              ADD TO CART BAG
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
