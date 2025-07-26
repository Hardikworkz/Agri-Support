import "./Login.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/api/users/login', form);
    localStorage.setItem('token', res.data.token); 
    navigate('/');
  } catch  {
    alert('Login failed. Please check your email or password.');
  }
};


  return (
    <div className="auth-fullscreen">
      <div className="auth-form-overlay">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2 className="auth-title">SIGN IN</h2>
          <p className="auth-subtitle">Sign in with email address</p>

          <input
            type="email"
            name="email"
            placeholder="Yourname@gmail.com"
            className="auth-input"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            value={form.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="signup-btn">Sign In</button>

          <p className="auth-continue">
            Not a member? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
