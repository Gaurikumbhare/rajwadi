import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about-view" className="view-section about-page-section">
      <div className="about-container section-padding">
        <div className="about-image-col">
          <img src="assets/images/image.png" alt="Rajwadi History" className="about-collage-img" />
        </div>
        <div className="about-text-col">
          <span className="about-subtitle">ABOUT RAJWADI</span>
          <h2 className="about-title">Elegance Woven with Heritage</h2>
          <p className="about-desc">
            At Rajwadi, we believe that every thread tells a story. For over two decades, we have been curators of India's most exquisite ethnic wear, blending the richness of our royal heritage with contemporary aesthetics. Our collections are a tribute to the timeless beauty of traditional Indian craftsmanship.
          </p>
          <p className="about-desc">
            Whether you are a bride seeking the perfect lehenga, or a modern woman looking for a stunning festive saree, our meticulously crafted ensembles are designed to make you feel nothing less than royalty. We source directly from master weavers across the subcontinent to bring you authenticity, unmatched quality, and luxury.
          </p>
          <button className="btn-explore" onClick={() => navigate('/collections')}>EXPLORE THE COLLECTION</button>
        </div>
      </div>
    </section>
  );
};

export default About;
