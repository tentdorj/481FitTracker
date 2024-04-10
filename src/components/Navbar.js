import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import Logo from '../assets/icons/Screenshot 2024-04-09 at 10.22.00 PM.png';

const Navbar = () => {
  const navigate = useNavigate();

  // Handler to check login status and navigate accordingly
  const handleNavigation = (path) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userToken = localStorage.getItem('userToken');
    
    if (isLoggedIn && userToken) {
      // User is logged in, navigate to requested path
      navigate(path);
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  };

  return (
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
        {/* Wrap the Links with a function to check login status */}
        <span onClick={() => handleNavigation("/calendar")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Calendar</span>
        <span onClick={() => handleNavigation("/nutrition")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Nutrition</span>
        <span onClick={() => handleNavigation("/profile")} style={{ cursor: 'pointer', textDecoration: 'none', color: '#3A1212' }}>Profile</span>
      </Stack>
    </Stack>
  );
};

export default Navbar;
