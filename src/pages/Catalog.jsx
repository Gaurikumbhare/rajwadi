import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.js';
import { useAppContext } from '../context/AppContext';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';
  const { wishlistItems, toggleWishlist } = useAppContext();
  
  const [products, setProducts] = useState(productsData || []);
  const [filteredProducts, setFilteredProducts] = useState(productsData || []);
  
  // Filters and Sorting
  const [sortType, setSortType] = useState('featured');
  const [categories, setCategories] = useState(initialCategory !== 'All' ? [initialCategory] : []);
  const [colors, setColors] = useState([]);
  const [fabrics, setFabrics] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (initialCategory !== 'All') {
      setCategories([initialCategory]);
    } else {
      setCategories([]);
    }
  }, [initialCategory]);

  useEffect(() => {
    let result = [...products];

    // Search query filter (from search bar)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.fabric && p.fabric.toLowerCase().includes(q)) ||
        (p.color && p.color.toLowerCase().includes(q))
      );
    }

    if (categories.length > 0) {
      result = result.filter(p => categories.includes(p.category));
    }
    if (colors.length > 0) {
      result = result.filter(p => colors.includes(p.color));
    }
    if (fabrics.length > 0) {
      result = result.filter(p => fabrics.includes(p.fabric));
    }

    if (priceRanges.length > 0) {
      result = result.filter(p => {
        return priceRanges.some(range => {
          if (range === 'Under ₹100') return p.price < 100;
          if (range === '₹100 - ₹200') return p.price >= 100 && p.price <= 200;
          if (range === '₹200 - ₹300') return p.price >= 200 && p.price <= 300;
          if (range === 'Over ₹300') return p.price > 300;
          return false;
        });
      });
    }

    // Apply Sorting
    if (sortType === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    // 'featured' leaves the default order

    setFilteredProducts(result);
  }, [categories, colors, fabrics, priceRanges, products, sortType, searchQuery]);

  const handleCheckboxChange = (setter, value, state) => {
    if (state.includes(value)) {
      setter(state.filter(v => v !== value));
    } else {
      setter([...state, value]);
    }
  };

  return (
    <section id="catalog-view" className="view-section">
      <div className="catalog-layout">
        <aside className={`filter-sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="filter-header-mobile">
            <h3 className="filter-title" style={{ marginBottom: 0 }}>Filters</h3>
            <button className="mobile-filter-close" onClick={() => setIsSidebarOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="filter-group">
            <h4 className="filter-group-title">Price</h4>
            <div className="filter-options">
              {['Under ₹100', '₹100 - ₹200', '₹200 - ₹300', 'Over ₹300'].map(range => (
                <label key={range} className="filter-checkbox-label">
                  <input type="checkbox" checked={priceRanges.includes(range)} onChange={() => handleCheckboxChange(setPriceRanges, range, priceRanges)} /> {range}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-group-title">Color</h4>
            <div className="filter-options">
              {['Red', 'Cream', 'Gold', 'Green', 'Blue'].map(col => (
                <label key={col} className="filter-checkbox-label">
                  <input type="checkbox" checked={colors.includes(col)} onChange={() => handleCheckboxChange(setColors, col, colors)} /> {col}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-group-title">Fabric</h4>
            <div className="filter-options">
              {['Silk', 'Georgette', 'Velvet', 'Brocade'].map(fab => (
                <label key={fab} className="filter-checkbox-label">
                  <input type="checkbox" checked={fabrics.includes(fab)} onChange={() => handleCheckboxChange(setFabrics, fab, fabrics)} /> {fab}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="catalog-content">
          <div className="catalog-content-header">
            <h2 className="catalog-title">Ethnic Wear Collections</h2>
            <div className="catalog-actions-row">
              <button className="mobile-filter-btn" onClick={() => setIsSidebarOpen(true)}>
                <i className="fa-solid fa-sliders"></i> Filter
              </button>
              <div className="catalog-sorting">
                <span>Sort By:</span>
                <select className="sort-select" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => {
              // Mock badge and rating for UI demo based on category
              const badgeMap = {
                'Lehenga': 'BRIDAL',
                'Saree': 'TRADITIONAL',
                'Sherwani': 'GROOMS WEAR',
                'Salwar Kameez': 'FESTIVE'
              };
              const badge = badgeMap[product.category] || 'NEW';
              const ratingCount = Math.floor(product.id * 7) % 50 + 10;
              const isWishlisted = wishlistItems?.includes(product.id);
              
              return (
                <div key={product.id} className="new-product-card">
                  <div className="new-product-image-container">
                    <span className="new-product-badge">{badge}</span>
                    <img src={product.image} alt={product.name} style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)} />
                    <button className="new-wishlist-btn" onClick={() => toggleWishlist(product.id)}>
                      <i className={isWishlisted ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={isWishlisted ? { color: 'var(--color-maroon)' } : {}}></i>
                    </button>
                  </div>
                  <div className="new-product-info">
                    <div className="new-product-subtitle">{product.category.toUpperCase()}</div>
                    <h4 className="new-product-title" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h4>
                    
                    <div className="new-product-rating">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span className="rating-count">({ratingCount})</span>
                    </div>

                    <hr className="new-product-divider" />

                    <div className="new-product-footer">
                      <div className="new-product-price">₹{product.price.toFixed(2)}</div>
                      <button className="new-btn-details" onClick={() => navigate(`/product/${product.id}`)}>VIEW DETAILS</button>
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredProducts.length === 0 && (
              <p>No products found matching your filters.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
