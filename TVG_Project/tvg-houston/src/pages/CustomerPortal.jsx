import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './CustomerPortal.css';

export default function CustomerPortal() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isLogin) {
      const result = await login(email, password);
      if (result.success) {
        navigate('/cart');
      } else {
        setError(result.message || 'Invalid email or password');
      }
    } else {
      // Registration logic here
      setError('Registration functionality coming soon');
    }

    setLoading(false);
  };

  return (
    <div className="customer-portal">
      <div className="portal-container">
        <div className="portal-left">
          <div className="portal-branding">
            <div className="portal-logo">
              <div className="logo-mark"></div>
              <div className="logo-text">
                <strong>TVG</strong>
                <span>Houston</span>
              </div>
            </div>
            <h1 className="portal-title">Customer Portal</h1>
            <p className="portal-subtitle">
              Access your account, manage orders, track shipments, and view your complete order history.
            </p>
            <div className="portal-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>View order history</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Track shipments</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Manage account settings</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Download invoices</span>
              </div>
            </div>
          </div>
        </div>

        <div className="portal-right">
          <div className="portal-form-container">
            <div className="portal-tabs">
              <button
                className={`portal-tab ${isLogin ? 'active' : ''}`}
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                }}
              >
                Sign In
              </button>
              <button
                className={`portal-tab ${!isLogin ? 'active' : ''}`}
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                }}
              >
                Register
              </button>
            </div>

            <div className="portal-form-wrapper">
              <h2 className="portal-form-title">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="portal-form-subtitle">
                {isLogin
                  ? 'Sign in to access your account'
                  : 'Create a new account to get started'}
              </p>

              <form onSubmit={handleSubmit} className="portal-form">
                {error && (
                  <div className="portal-error">
                    <span>⚠</span>
                    {error}
                  </div>
                )}

                <div className="portal-field-group">
                  <label className="portal-label">Email Address</label>
                  <input
                    type="email"
                    className="portal-input"
                    placeholder="you@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div className="portal-field-group">
                  <label className="portal-label">Password</label>
                  <input
                    type="password"
                    className="portal-input"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {isLogin && (
                  <div className="portal-options">
                    <label className="portal-checkbox">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="portal-forgot">
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button
                  type="submit"
                  className="portal-submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? 'Please wait...'
                    : isLogin
                    ? 'Sign In'
                    : 'Create Account'}
                </button>

                {!isLogin && (
                  <p className="portal-terms">
                    By creating an account, you agree to our{' '}
                    <Link to="/terms">Terms of Service</Link> and{' '}
                    <Link to="/privacy">Privacy Policy</Link>
                  </p>
                )}
              </form>

              <div className="portal-divider">
                <span>Or continue with</span>
              </div>

              <div className="portal-social">
                <button type="button" className="portal-social-btn">
                  <span>G</span>
                  Google
                </button>
                <button type="button" className="portal-social-btn">
                  <span>M</span>
                  Microsoft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

