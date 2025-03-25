import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    regNo: '',
    email: '',
    codeforcesHandle: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            regNo: formData.regNo,
            email: formData.email,
            password: formData.password,
            codeforcesHandle: formData.codeforcesHandle
          }),
        });

        const data = await response.json();

        if (data.success) {
          alert('Signup successful! Please login.');
          setMode('login');
          setFormData({
            regNo: '',
            email: '',
            codeforcesHandle: '',
            password: '',
            confirmPassword: ''
          });
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error:', err);
      }
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            regNo: formData.regNo,
            password: formData.password
          }),
        });

        const data = await response.json();

        if (data.success) {
          alert('Login successful!');
          onClose();
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error:', err);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        
        {mode === 'login' ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Registration Number</label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                  placeholder="Enter university registration number"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="submit-button">Login</button>
            </form>
            <p className="switch-mode">
              Don't have an account?{' '}
              <button onClick={() => setMode('signup')}>Sign Up</button>
            </p>
          </>
        ) : (
          <>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Registration Number</label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                  placeholder="Enter university registration number"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Codeforces Handle</label>
                <input
                  type="text"
                  name="codeforcesHandle"
                  value={formData.codeforcesHandle}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Codeforces handle"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
              <button type="submit" className="submit-button">Sign Up</button>
            </form>
            <p className="switch-mode">
              Already have an account?{' '}
              <button onClick={() => setMode('login')}>Login</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth; 