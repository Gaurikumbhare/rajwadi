import React from 'react';

const Contact = () => {
  const submitConsultation = (e) => {
    e.preventDefault();
    alert("Consultation requested!");
  };

  return (
    <section id="contact-view" className="view-section" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold-dark)', marginBottom: '15px', textTransform: 'uppercase' }}>THE PRIVATE SUITE</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--color-maroon-dark)', marginBottom: '25px', lineHeight: 1.2 }}>Bespoke<br />Consultation</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-charcoal)', marginBottom: '60px' }}>
            Our master tailors and style consultants are available for private appointments at our flagships or your personal residence. Please provide your details, and our concierge will contact you within 24 hours to arrange your visit.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-charcoal)' }}>
              <i className="fa-solid fa-shield-halved" style={{ color: 'var(--color-gold-dark)' }}></i> ENHANCED PRIVACY ASSURED
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-charcoal)' }}>
              <i className="fa-solid fa-scroll" style={{ color: 'var(--color-gold-dark)' }}></i> HERITAGE FABRIC SELECTION
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, background: 'white', padding: '60px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
          <form onSubmit={submitConsultation}>
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', marginBottom: '8px' }}>FULL NAME</label>
              <input type="text" placeholder="Your Excellency" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '14px', fontFamily: 'inherit' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', marginBottom: '8px' }}>EMAIL ADDRESS</label>
              <input type="email" placeholder="contact@example.com" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '14px', fontFamily: 'inherit' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', marginBottom: '8px' }}>PREFERRED LOCATION</label>
                <select style={{ width: '100%', padding: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '14px', fontFamily: 'inherit', background: 'white' }}>
                  <option>Jaipur Flagship</option>
                  <option>London Atelier</option>
                  <option>New York Suite</option>
                  <option>Virtual Consultation</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', marginBottom: '8px' }}>PREFERRED DATE</label>
                <input type="date" style={{ width: '100%', padding: '11px', border: '1px solid #ddd', outline: 'none', fontSize: '14px', fontFamily: 'inherit' }} />
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold-dark)', marginBottom: '8px' }}>SPECIAL REQUIREMENTS</label>
              <textarea placeholder="Wedding ensembles, corporate wardrobe, etc." rows="3" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" style={{ width: '100%', background: 'var(--color-maroon-dark)', color: 'white', border: 'none', padding: '15px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}>INITIATE CONSULTATION</button>
          </form>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--color-gold-dark)', fontSize: '10px', margin: '20px 0 60px' }}>◆</div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', paddingBottom: '80px' }}>
        <h3 style={{ fontSize: '18px', color: '#444', marginBottom: '60px', fontWeight: 400 }}>Stay in Touch with Rajwadi Jewellers</h3>
        
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', textAlign: 'left' }}>
          
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: '28px', color: '#7b5840', marginBottom: '40px', letterSpacing: '0.15em', fontWeight: 600 }}>ADDRESS</h2>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '30px' }}>
              <i className="fa-solid fa-location-dot" style={{ color: '#c0905a', fontSize: '20px', marginTop: '3px' }}></i>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555', margin: 0 }}>Rajwadi Jewellers, Mahatma Gandhi Rd, Kapadia Chal,<br />Valsad, Gujarat 396001 Gujarat India</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <i className="fa-solid fa-phone" style={{ color: '#c0905a', fontSize: '18px' }}></i>
              <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>02632-299333</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fa-regular fa-envelope" style={{ color: '#c0905a', fontSize: '18px' }}></i>
              <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>info@rajwadijewellers.com</p>
            </div>
          </div>

          <div style={{ flex: 1.5, border: '1px solid #ddd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.1507722122826!2d72.932977!3d20.613611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2b295a09c25%3A0xc33120150d0322d6!2sRajwadi%20Jewellers!5e0!3m2!1sen!2sus!4v1683232145823!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: 'var(--color-maroon-dark)', color: 'white', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '15px', textTransform: 'uppercase' }}>EXCLUSIVITY</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', marginBottom: '25px', lineHeight: 1.2 }}>Concierge<br />Services</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#ddd', marginBottom: '40px', maxWidth: '400px' }}>
              For immediate assistance or unique requests, our global concierge team is available around the clock to provide personalized support.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-gold)' }}>
                <i className="fa-solid fa-headset"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', marginBottom: '5px' }}>Personal Stylist</h4>
                <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '3px' }}>concierge@rajwadiheritage.com</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold)' }}>+1 (800) RAJWADI-CARE</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-gold)' }}>
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', marginBottom: '5px' }}>Press & Media</h4>
                <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '3px' }}>media@rajwadiheritage.com</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold)' }}>FOR GLOBAL EDITORIAL INQUIRIES</div>
              </div>
            </div>
          </div>
          
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '50px 40px', textAlign: 'center', position: 'relative', maxWidth: '450px' }}>
              <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '30px', height: '30px', borderTop: '1px solid var(--color-gold)', borderLeft: '1px solid var(--color-gold)' }}></div>
              <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '30px', height: '30px', borderTop: '1px solid var(--color-gold)', borderRight: '1px solid var(--color-gold)' }}></div>
              <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '30px', height: '30px', borderBottom: '1px solid var(--color-gold)', borderLeft: '1px solid var(--color-gold)' }}></div>
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '30px', height: '30px', borderBottom: '1px solid var(--color-gold)', borderRight: '1px solid var(--color-gold)' }}></div>
              
              <i className="fa-solid fa-sparkles" style={{ color: 'var(--color-gold)', fontSize: '24px', marginBottom: '20px' }}></i>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', lineHeight: 1.4, marginBottom: '20px', fontStyle: 'italic' }}>"True luxury lies in the details that remain unspoken but deeply felt."</h3>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>— The Rajwadi Philosophy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
