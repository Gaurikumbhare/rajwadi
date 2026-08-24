import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Load session on mount
  useEffect(() => {
    const session = localStorage.getItem('mock_session');
    if (session) {
      setCurrentUser(JSON.parse(session));
    }
  }, []);

  const showToast = (message, isError = false) => {
    // Simple toast using alert for now; can be upgraded
    alert(message);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value.trim();
    const password = e.target.loginPassword.value;

    const mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const user = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };
      localStorage.setItem('mock_session', JSON.stringify(user));
      setCurrentUser(user);
      e.target.reset();
      showToast(`Welcome back, ${foundUser.name}!`);
    } else {
      showToast('Invalid email or password (Demo Mode). Please register first!');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.signupName.value.trim();
    const email = e.target.signupEmail.value.trim();
    const password = e.target.signupPassword.value;

    const mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
    if (mockUsers.some(u => u.email === email)) {
      showToast('Email address already registered (Demo Mode)!');
      return;
    }
    const newUser = {
      id: 'mock-' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      password,
    };
    mockUsers.push(newUser);
    localStorage.setItem('mock_users', JSON.stringify(mockUsers));
    localStorage.setItem('mock_session', JSON.stringify({ id: newUser.id, email, name }));
    setCurrentUser({ id: newUser.id, email, name });
    e.target.reset();
    showToast(`Welcome, ${name}! Account created successfully (Demo Mode).`);
  };

  const handleLogout = () => {
    localStorage.removeItem('mock_session');
    setCurrentUser(null);
    showToast('You have been signed out.');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showToast('Password reset link sent to your email!');
  };

  if (currentUser) {
    return (
      <section className="account-page-container" style={{ padding: '60px 20px', minHeight: '70vh' }}>
        <div className="account-card-wrapper" style={{ maxWidth: '480px', margin: '0 auto' }}>
          <div className="profile-container" id="profile-panel">
            <div className="profile-header">
              <div className="profile-avatar"><i className="fa-solid fa-user-tie"></i></div>
              <h3 className="profile-title">Namaste, {currentUser.name || 'Royal Guest'}!</h3>
              <p className="profile-subtitle">{currentUser.email}</p>
            </div>
            <div className="profile-stats">
              <div className="stat-card">
                <span className="stat-num">♦</span>
                <span className="stat-label">Royal Member</span>
              </div>
              <div className="stat-card" onClick={() => navigate('/collections')} style={{ cursor: 'pointer' }}>
                <span className="stat-num"><i className="fa-solid fa-bag-shopping"></i></span>
                <span className="stat-label">Shop Now</span>
              </div>
            </div>
            <button className="btn-account-submit" style={{ marginTop: '24px' }} onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="account-page-container" style={{ padding: '60px 20px', minHeight: '70vh' }}>
      <div className="account-card-wrapper" style={{ maxWidth: '480px', margin: '0 auto' }}>
        <div className="account-modal-tabs">
          <button
            className={`account-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >Sign In</button>
          <button
            className={`account-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >Register</button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <div className="account-form-panel active">
            <h3 className="account-panel-title">Welcome Back</h3>
            <p className="account-panel-subtitle">Access your order history, wishlist, and custom measurements.</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address *</label>
                <input type="email" id="loginEmail" name="loginEmail" required placeholder="name@example.com" className="account-input" />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password *</label>
                <input type="password" id="loginPassword" name="loginPassword" required placeholder="••••••••" className="account-input" />
              </div>
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" style={{ accentColor: 'var(--color-gold-dark)' }} /> Remember Me
                </label>
                <a href="#" className="forgot-pass-link" onClick={handleForgotPassword}>Forgot Password?</a>
              </div>
              <button type="submit" className="btn-account-submit">Sign In to Gallery</button>
            </form>
          </div>
        )}

        {/* Signup Form */}
        {activeTab === 'signup' && (
          <div className="account-form-panel active">
            <h3 className="account-panel-title">Create Royal Account</h3>
            <p className="account-panel-subtitle">Join for exclusive previews, stitching charts, and express checkout.</p>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="signupName">Full Name *</label>
                <input type="text" id="signupName" name="signupName" required placeholder="Your Name" className="account-input" />
              </div>
              <div className="form-group">
                <label htmlFor="signupEmail">Email Address *</label>
                <input type="email" id="signupEmail" name="signupEmail" required placeholder="name@example.com" className="account-input" />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password *</label>
                <input type="password" id="signupPassword" name="signupPassword" required placeholder="Create Password" className="account-input" />
              </div>
              <label style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-gray-dark)', margin: '15px 0', cursor: 'pointer', alignItems: 'center' }}>
                <input type="checkbox" required style={{ accentColor: 'var(--color-gold-dark)' }} />
                I agree to the terms and privacy policies.
              </label>
              <button type="submit" className="btn-account-submit">Register Account</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Account;
