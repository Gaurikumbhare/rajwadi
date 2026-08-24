import React from 'react';

const Story = () => {
  return (
    <section id="story-view" className="view-section">
      <div className="section-padding" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span className="store-subtitle" style={{ marginBottom: '15px', display: 'block' }}>Our Journey</span>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--color-maroon-dark)', marginBottom: '30px' }}>From a Small Boutique to a Global Legacy</h2>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <img src="assets/images/image.png" alt="Our Story" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
        </div>

        <div style={{ fontSize: '17px', lineHeight: '1.9', color: 'var(--color-charcoal)', textAlign: 'justify', marginBottom: '30px' }}>
          Rajwadi's journey began with a simple dream: to share the unparalleled beauty of Indian ethnic wear with the world. What started as a small family-run boutique in the heart of Gujarat has now blossomed into a globally recognized brand, trusted by millions for its commitment to quality and tradition.
        </div>
        <div style={{ fontSize: '17px', lineHeight: '1.9', color: 'var(--color-charcoal)', textAlign: 'justify' }}>
          Our founders traveled the length and breadth of India, forming deep relationships with artisan families who have passed down their weaving and embroidery techniques for generations. Today, every piece in our collection is a testament to their skill and our unwavering dedication to preserving India's sartorial legacy. When you wear Rajwadi, you aren't just wearing clothes—you are wearing history.
        </div>
      </div>
    </section>
  );
};

export default Story;
