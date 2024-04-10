
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic here
    alert('Login successful!');
    // Redirect or do other actions as needed
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "linear-gradient(to right, #6DD5FA, #FF758C)",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <div
        className="max-w-md w-full mx-auto"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: '10px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In</h2>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{ marginTop: '4px', border: '1px solid #CBD5E0', borderRadius: '5px' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{ marginTop: '4px', border: '1px solid #CBD5E0', borderRadius: '5px' }}
            />
          </div>
          <div className="mb-6">
            <input
              type="checkbox"
              id="viewPassword"
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="viewPassword" className="text-sm font-medium text-gray-700">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4FD1C5",
              color: "white",
              fontWeight: "bold",
              padding: "15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.2s",
            }}
            onMouseOver={({target}) => target.style.backgroundColor = "#2C7A7B"}
            onMouseOut={({target}) => target.style.backgroundColor = "#4FD1C5"}
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
          {' | '}
          <a href="forgot_password" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
