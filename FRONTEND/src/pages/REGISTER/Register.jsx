import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitCall = async (data) => {
  try {
    await axios.post('http://localhost:3000/api/users/register', data);
    alert('Registration successful!');
    reset();
    setTimeout(() => navigate('/login'), 100); 
  } catch {
    alert('Registration failed. Email may already be in use.');
  }
};


  return (
    <div
      className="auth-fullscreen"
      style={{ backgroundImage: "url('/path-to-your-farmer-image.png')" }}
    >
      <div className="auth-form-overlay">
        <form className="auth-form" onSubmit={handleSubmit(submitCall)}>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us and support Indian farmers</p>

          <input
            type="text"
            className="auth-input"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            className="auth-input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
         <input
           type="password"
           className="auth-input"
           placeholder="Password"
           {...register("password", { required: true })}
         />
         
          <button className="signup-btn" type="submit">Register</button>

          <p className="auth-continue">
            Already a member? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
