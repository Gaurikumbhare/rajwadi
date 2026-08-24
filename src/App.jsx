import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/Story';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';

// Import Global CSS
import './assets/css/rajwadi.css';
import './assets/css/rajwadi_v2.css';
import './assets/css/index.css';
import './assets/css/mobile.css';
import './assets/css/mobile_v2.css';
import './custom.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [doorOpened, setDoorOpened] = useState(false);

  const handleDoorOpen = () => {
    if (doorOpened) return;
    setDoorOpened(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1300);
  };

  return (
    <Router>
      <ScrollToTop />
      {showSplash && (
        <div id="door-splash" className={doorOpened ? 'opened' : ''} onClick={handleDoorOpen}>
          <div className="door-half left"></div>
          <div className="door-half right"></div>
          <div className="door-welcome-text">
            <h2>Welcome to Rajwadi</h2>
            <p>Click Anywhere to Enter the Royal Gallery</p>
            <div className="door-pulse-indicator">&#9670;</div>
          </div>
        </div>
      )}
      <div className="App">
        <Header />
        <CartDrawer />
        <WishlistDrawer />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<Story />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collections" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
