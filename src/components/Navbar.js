import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import Logo from '../assets/icons/Screenshot 2024-04-09 at 10.22.00 PM.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleNavigation = (path) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userToken = localStorage.getItem('userToken');

    if (isLoggedIn && userToken) {
      navigate(path);
    } else {
      setShowLoginPrompt(true); // Show login prompt if not logged in
    }
  };

  const handleLoginPrompt = (login) => {
    setShowLoginPrompt(false);
    if (login) {
      navigate('/login'); // Navigate to login page if user chooses to log in
    }
  };

  // Modal Styles
  // Add this to your component's styles
const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: '100px',
  maxWidth: '80%', // Don't let the modal get too wide on large screens
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  zIndex: 1000,
  textAlign: 'center'
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const yesButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#4CAF50',
  color: 'white'
};

const noButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f44336',
  color: 'white'
};

const buttonHoverStyle = {
  opacity: 0.8
};

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ gap: { sm: '122px', xs: '40px'}, mt:{sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px"
      >
        <Link to="/">
          <img src={Logo} alt="logo" style={{ width: '150px', height: '60px', margin: '0 20px'}} />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link to="/" style={{ textDecoration: 'none', color:"#3A1212", borderBottom: '3px solid #3f704d'}}>Home</Link>
          <a href="/#exercises" style={{ textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
          <span onClick={() => handleNavigation("/calendar")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Calendar</span>
          <span onClick={() => handleNavigation("/nutrition")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Nutrition</span>
          <span onClick={() => handleNavigation("/profile")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Profile</span>
        </Stack>
      </Stack>
      
      {showLoginPrompt && (
        <>
          <div style={backdropStyle} onClick={() => handleLoginPrompt(false)} />
          <div style={modalStyle}>
            <p>This service requires Log in. Would you like to log in?</p>
            <button
  onClick={() => handleLoginPrompt(true)}
  style={yesButtonStyle}
  onMouseEnter={e => e.target.style.opacity = buttonHoverStyle.opacity}
  onMouseLeave={e => e.target.style.opacity = '1'}
>
  Yes, sign in
</button>
<button
  onClick={() => handleLoginPrompt(false)}
  style={noButtonStyle}
  onMouseEnter={e => e.target.style.opacity = buttonHoverStyle.opacity}
  onMouseLeave={e => e.target.style.opacity = '1'}
>
  No, I'm good
</button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

