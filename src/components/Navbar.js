import React from 'react'
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';


import Logo from '../assets/icons/Screenshot 2024-04-09 at 10.22.00 PM.png'
const Navbar = () => {
  return (
    <Stack
        direction = "row"
        justifyContent = "space-around" sx={{ gap: { sm: '122px', xs: '40px'}, mt:{sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '150px', height: '60px', margin: '0 20px'}}/>
        </Link>
        <Stack 
            direction="row"
            gap="40px"
            fontSize = "24px"
            alignItems= "flex-end"

        >
            <Link to = "/" style={{ textDecoration: 'none', color:"#3A1212", borderBottom:
            '3px solid #3f704d'}}>Home</Link>
            <a href="#exercises" style={{ textDecoration:
            'none', color: '#3A1212'}}>Exercises</a>
            <Link to="/calendar" style={{ textDecoration: 'none', color: '#3A1212' }}>Calendar</Link>
            <Link to="/nutrition" style={{ textDecoration: 'none', color: '#3A1212' }}>Nutrition</Link>
            <Link to="/profile" style={{ textDecoration: 'none', color: '#3A1212' }}>Profile</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar