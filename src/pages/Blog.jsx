import React from 'react';

const Blog = () => {
  return (
    <section id="blog-view" className="view-section" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="blog-hero" style={{ position: 'relative', padding: '120px 20px', textAlign: 'center', background: 'radial-gradient(circle at top, #e8dfd8 0%, #fcfcfc 70%)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--color-gold-dark)', marginBottom: '20px' }}>EST. 1960</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '56px', color: 'var(--color-maroon-dark)', marginBottom: '25px' }}>The Rajwadi</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '16px', lineHeight: '1.8', color: 'var(--color-charcoal)' }}>
          A timeless archive exploring the intricate craftsmanship, storied traditions, and the contemporary evolution of Indian royal attire. We invite you to journey through the threads of our heritage.With a large family of loyal consumers in India and abroad, Rajwadi Group continues to provide excellence in the world of fashion and exquisite jewellery. As someone rightly said: “family and legacy go hand in hand and is the connective tissue that binds the core purpose of the business”, Rajwadi Group aspires to grow further and farther in future
        </p>
        <div style={{ color: 'var(--color-gold-dark)', fontSize: '10px' }}>◆</div>
      </div>

      <div className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold-dark)', marginBottom: '15px', textTransform: 'uppercase' }}>Masterpiece Spotlight</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--color-maroon-dark)', marginBottom: '20px' }}>The Art of Zardosi</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--color-charcoal)', marginBottom: '30px' }}>
            Centuries ago, Zardosi was the mark of gods and kings. Today, at Rajwadi, we preserve the meticulous technique of sewing gold and silver threads onto rich velvets and silks. Each piece is a testament to thousands of hours of patience and unparalleled skill.
          </p>
          <a href="#" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-charcoal)', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--color-charcoal)', paddingBottom: '3px' }}>Read the full story &rarr;</a>
        </div>
        <div style={{ flex: 1.2 }}>
          <img src="assets/images/blog_zardosi.png" alt="Zardosi Art" style={{ width: '100%', height: 'auto', border: '1px solid #e0e0e0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} />
        </div>
      </div>

      <div className="section-padding" style={{ backgroundColor: '#f7f6f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--color-maroon-dark)', textAlign: 'center', marginBottom: '50px' }}>Heritage Collections</h3>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            
            <div style={{ background: 'var(--color-white)', padding: '25px', width: '340px', border: '1px solid #eaeaea' }}>
              <img src="assets/images/sherwani.png" alt="Royal Silks" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '20px' }} />
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold-dark)', marginBottom: '10px' }}>TEXTILES</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-maroon-dark)', marginBottom: '15px' }}>Royal Silks of the East</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-charcoal)', marginBottom: '20px' }}>Discover the legendary weaving techniques of Varanasi and Kanchipuram, where silk is more than...</p>
              <a href="#" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', textDecoration: 'none' }}>READ MORE</a>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '25px', width: '340px', border: '1px solid #eaeaea' }}>
              <img src="assets/images/saree.png" alt="Modern Majesty" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '20px' }} />
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold-dark)', marginBottom: '10px' }}>STYLING</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-maroon-dark)', marginBottom: '15px' }}>Modern Majesty: Styling Heritage</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-charcoal)', marginBottom: '20px' }}>How to blend traditional royal silhouettes with contemporary minimalist sensibilities for the modern...</p>
              <a href="#" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', textDecoration: 'none' }}>READ MORE</a>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '25px', width: '340px', border: '1px solid #eaeaea' }}>
              <img src="assets/images/lehenga.png" alt="The Jeweled Gaze" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '20px' }} />
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold-dark)', marginBottom: '10px' }}>ATELIER</div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-maroon-dark)', marginBottom: '15px' }}>The Jeweled Gaze</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-charcoal)', marginBottom: '20px' }}>An exclusive look inside the Rajwadi atelier, where jewelry and garment design unite to create a singular...</p>
              <a href="#" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', textDecoration: 'none' }}>READ MORE</a>
            </div>

          </div>
        </div>
      </div>

      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#fcfcfc' }}>
        <div style={{ fontSize: '24px', color: 'var(--color-gold-dark)', marginBottom: '15px' }}><i className="fa-solid fa-envelope-open-text"></i></div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--color-maroon-dark)', marginBottom: '15px' }}>Join the Inner Circle</h3>
        <p style={{ fontSize: '14px', color: 'var(--color-charcoal)', marginBottom: '30px' }}>Receive early access to seasonal lookbooks and private stories from the Rajwadi archives.</p>
        <div style={{ display: 'inline-flex', borderBottom: '1px solid var(--color-charcoal)', paddingBottom: '5px' }}>
          <input type="email" placeholder="EMAIL ADDRESS" style={{ border: 'none', background: 'transparent', outline: 'none', padding: '10px 5px', fontSize: '12px', letterSpacing: '0.05em', width: '250px' }} />
          <button style={{ background: 'var(--color-maroon-dark)', color: 'white', border: 'none', padding: '10px 20px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer' }}>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
