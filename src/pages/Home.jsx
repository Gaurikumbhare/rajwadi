import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Globe, Scissors, Diamond } from 'lucide-react';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: "assets/images/hero_dark_lehenga.png",
      title: "Royal Bridal Elegance",
      subtitle: "Explore luxurious Lehengas, Sarees, and Sherwanis crafted for royalty.",
      btnText: "Shop Wedding Wear",
      action: () => navigate('/collections?category=Lehenga')
    },
    {
      image: "assets/images/Gemini_Generated_Image_r9qhlnr9qhlnr9qh.png",
      title: "Imperial Groomswear",
      subtitle: "Exquisite Handcrafted Sherwanis and Jodhpuris for the modern Groom.",
      btnText: "View Sherwanis",
      action: () => navigate('/collections?category=Sherwani')
    },
    {
      image: "assets/images/salwar.png",
      title: "Stylish Salwar Kameez",
      subtitle: "Stylish Salwar Kameez for every occasion.",
      btnText: "Shop Salwar Kameez",
      action: () => navigate('/collections?category=Salwar Kameez')
    },
    {
      image: "assets/images/hero_banarsi.png",
      title: "Festive Silk Heritage",
      subtitle: "Cherished family moments in pure handloom silks.",
      btnText: "Shop Pure Silk Sarees",
      action: () => navigate('/collections?category=Saree')
    }
  ];

  return (
    <section id="home-view" className="view-section active">
      {/* Hero Carousel */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <button className="btn-gold" onClick={slide.action}>{slide.btnText}</button>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span key={index} className={`dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)}></span>
          ))}
        </div>
      </div>

      {/* Our Stores Section */}
      <div className="section-padding our-stores-section" style={{ paddingBottom: '20px' }}>
        <div className="section-header">
          <span className="store-subtitle">OUR STORES</span>
          <h2>Find everything for your every need</h2>
        </div>
        <div className="stores-carousel-wrapper">
          <button className="stores-scroll-btn left-btn" onClick={() => document.getElementById('storesScrollContainer').scrollBy({ left: -200, behavior: 'smooth' })}>
            <ChevronLeft size={24} color="var(--color-gold-dark)" />
          </button>
          <div className="stores-scroll-container" id="storesScrollContainer">
            {['Women', 'Men', 'Kids', 'Home', 'Luxe Edit', 'Hidden Gems', 'Global Store', 'Revolve', 'Wedding', 'Festive', 'Party Wear', 'Casuals'].map((store, idx) => {
              const imageMap = {
                'Women': 'circle_women.png', 'Men': 'circle_men.png', 'Kids': 'circle_kids.png', 'Home': 'circle_home.png', 'Luxe Edit': 'circle_luxe.png', 'Hidden Gems': 'circle_gems.png', 'Global Store': 'circle_global.png', 'Revolve': 'circle_revolve.png', 'Wedding': 'lehenga.png', 'Festive': 'saree.png', 'Party Wear': 'gem_party.png', 'Casuals': 'gem_coords.png'
              };
              return (
                <div key={idx} className="store-circle-card" onClick={() => navigate('/collections')}>
                  <div className="circle-image-wrapper">
                    <img src={`assets/images/${imageMap[store]}`} alt={store} />
                  </div>
                  <span className="store-name">{store}</span>
                </div>
              );
            })}
          </div>
          <button className="stores-scroll-btn right-btn" onClick={() => document.getElementById('storesScrollContainer').scrollBy({ left: 200, behavior: 'smooth' })}>
            <ChevronRight size={24} color="var(--color-gold-dark)" />
          </button>
        </div>
      </div>

      {/* Categories Block */}
      <div className="section-padding">
        <div className="section-header">
          <h2>Shop By Category</h2>
        </div>
        <div className="category-grid">
          <div className="category-card" onClick={() => navigate('/collections?category=Lehenga')}>
            <img src="assets/images/lehenga.png" alt="Lehenga Choli" />
            <div className="category-overlay">
              <h3 className="category-name">Lehenga Choli</h3>
              <span className="category-link">Explore Collection</span>
            </div>
          </div>
          <div className="category-card" onClick={() => navigate('/collections?category=Saree')}>
            <img src="assets/images/saree.png" alt="Saree" />
            <div className="category-overlay">
              <h3 className="category-name">Sarees</h3>
              <span className="category-link">Explore Collection</span>
            </div>
          </div>
          <div className="category-card" onClick={() => navigate('/collections?category=Sherwani')}>
            <img src="assets/images/sherwani.png" alt="Sherwani" />
            <div className="category-overlay">
              <h3 className="category-name">Grooms Wear</h3>
              <span className="category-link">Explore Collection</span>
            </div>
          </div>
          <div className="category-card" onClick={() => navigate('/collections?category=Salwar Kameez')}>
            <img src="assets/images/salwar.png" alt="Salwar Kameez" />
            <div className="category-overlay">
              <h3 className="category-name">Salwar Kameez</h3>
              <span className="category-link">Explore Collection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Occasion Styles Section */}
      <div className="occasion-section">
        <div className="occasion-grid">
          <div className="occasion-card large" onClick={() => navigate('/collections')}>
            <img src="assets/images/haldi_look.png" alt="Haldi Look" />
            <div className="occasion-label">Haldi Look</div>
          </div>
          <div className="occasion-center-col">
            <div className="occasion-info">
              <h3>Occasion Styles</h3>
              <h2>Elegant Moments</h2>
              <p>Discover handpicked styles tailored for weddings, parties, festivals, and more - perfect for every special moment.</p>
              <button className="btn-occasion-shop" onClick={() => navigate('/collections')}>Shop Now</button>
            </div>
            <div className="occasion-card" onClick={() => navigate('/collections')}>
              <img src="assets/images/mehndi_look.png" alt="Mehndi Outfit" />
              <div className="occasion-label">Mehndi Outfit</div>
            </div>
          </div>
          <div className="occasion-right-col">
            <div className="occasion-card" onClick={() => navigate('/collections')}>
              <img src="assets/images/wedding_look.png" alt="Wedding Look" />
              <div className="occasion-label">Wedding Look</div>
            </div>
            <div className="occasion-card" onClick={() => navigate('/collections')}>
              <img src="assets/images/sangeet_look.png" alt="Sangeet" />
              <div className="occasion-label">Sangeet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Gems Section */}
      <div className="hidden-gems-section">
        <div className="hg-left-col">
          <img src="assets/images/gem_main.png" alt="Hidden Gems Collection" />
          <div className="hg-left-overlay">
            <h2 className="hg-title">HIDDEN<br />GEMS</h2>
            <p className="hg-subtitle">Niche, homegrown labels<br />handpicked by Us</p>
            <button className="hg-explore-btn" onClick={() => navigate('/collections')}>
              Explore Hidden Gems <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="hg-right-col">
          <div className="hg-grid-item" onClick={() => navigate('/collections')}>
            <img src="assets/images/gem_chanderi.png" alt="Chanderi Shine" />
            <div className="hg-item-overlay">Chanderi Shine</div>
          </div>
          <div className="hg-grid-item" onClick={() => navigate('/collections')}>
            <img src="assets/images/gem_insta.png" alt="Insta loved" />
            <div className="hg-item-overlay">Insta loved</div>
          </div>
          <div className="hg-grid-item" onClick={() => navigate('/collections')}>
            <img src="assets/images/gem_party.png" alt="Party Ready" />
            <div className="hg-item-overlay">Party Ready</div>
          </div>
          <div className="hg-grid-item" onClick={() => navigate('/collections')}>
            <img src="assets/images/gem_coords.png" alt="Daily Coords" />
            <div className="hg-item-overlay">Daily Coords</div>
          </div>
        </div>
      </div>

      {/* Parallax Boutique Banner */}
      <div className="parallax-section">
        <div className="parallax-overlay">
          <h2>Design Your Dream Outfit</h2>
          <p>A fully custom made outfit crafted specially for you!!</p>
          <p className="small-text">Come and explore the exotic ethnic collection with Rajwadi</p>
          <button className="btn-gold" onClick={() => navigate('/collections')}>Shop Now</button>
        </div>
      </div>


      {/* Feature Banner Info */}
      <div className="feature-banner">
        <div className="feature-container">
          <div className="feature-item">
            <div className="feature-icon"><Globe size={32} color="#cca352" strokeWidth={1.5} /></div>
            <h4 className="feature-title">Worldwide Shipping</h4>
            <p className="feature-desc">Express delivery to USA, UK, Canada, Australia, and 200+ countries.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Scissors size={32} color="#cca352" strokeWidth={1.5} /></div>
            <h4 className="feature-title">Custom Stitching</h4>
            <p className="feature-desc">Get your items tailored exactly to your body measurements by master tailors.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Diamond size={32} color="#cca352" strokeWidth={1.5} /></div>
            <h4 className="feature-title">100% Authentic</h4>
            <p className="feature-desc">Direct from premium weavers and craftsmen across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
