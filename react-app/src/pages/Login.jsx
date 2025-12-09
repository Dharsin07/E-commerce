import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await loginWithGoogle();
      if (result.success) {
        toast.success('Signed in with Google');
        navigate(from, { replace: true });
      } else {
        toast.error(result.error || 'Unable to sign in with Google');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        toast.success('Welcome back!');
        navigate(from, { replace: true });
      } else {
        toast.error(result.error || 'Unable to sign in');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-background">
          <div className="auth-bg-overlay"></div>
          <div className="auth-bg-content">
            <h1>Welcome Back</h1>
            <p>Sign in to access your account and continue shopping</p>
          </div>
        </div>

        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-header">
              <h2>Sign In</h2>
              <p>Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              <button
                type="button"
                className="btn btn-secondary auth-submit-btn"
                disabled={isLoading}
                onClick={handleGoogleLogin}
                style={{ marginTop: '0.75rem' }}
              >
                Continue with Google
              </button>
            </form>

            <div className="auth-links">
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              <p><Link to="/">Back to Home</Link></p>
            </div>

            <div className="auth-demo-info">
              <h3>Demo Accounts:</h3>
              <div className="demo-accounts">
                <div className="demo-account">
                  <strong>Admin:</strong> admin@luxe.com / admin123
                </div>
                <div className="demo-account">
                  <strong>User:</strong> user@luxe.com / user123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
