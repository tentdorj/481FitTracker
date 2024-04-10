import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to the login page after successful password change

const Forgetpassword = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;

        // Assuming user data is stored in an array of user objects in localStorage under the key 'users'
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.username === username);

        if (userIndex === -1) {
            alert('No user found with that username.');
        } else if (users[userIndex].email !== email) {
            alert('Email does not match our records.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            // Update user's password
            users[userIndex].password = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Success: Your password has been changed.');
            navigate('/login'); // Redirect user to login page
        }
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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forget Password?</h2>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mergin-100">
              Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 margin-left-55">
              Email Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{ marginTop: '4px', border: '1px solid #CBD5E0', borderRadius: '5px' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{ marginTop: '4px', border: '1px solid #CBD5E0', borderRadius: '5px' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password &nbsp;
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{ marginTop: '4px', border: '1px solid #CBD5E0', borderRadius: '5px' }}
            />
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
            Change Password
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Go back to Login Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;