import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Nutrition from './pages/Nutrition';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Calender from './pages/Calender';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m= "auto">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path ="/nutrition" element={<Nutrition/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/calender" element={<Calender/>}/>

    </Routes>
    <Footer />
    </Box>
  )
}

export default App
