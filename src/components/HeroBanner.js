import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import HeroBannerImage from "../assets/images/fitness.jpeg";
import { Opacity } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '350px', xs: '70px' },
        ml: { sm: '35px' },
        position: 'relative',
        p: '20px',
      }}
    >
      <Typography color="#3f704d" fontWeight="600" fontSize="26px">
        FitTracker
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', sm: '40px' } }} mb="23px" mt="30px">
        Age With Grace
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Find Balance, Strength, and Confidence in Every Session
      </Typography>
      <Button variant="contained" href ="#exercises" sx={{height: '40px', width: '120px', backgroundColor: "#2e8b57", padding: '10px'}}
        Explore Exercises>
          Exercises
        
      </Button>
      <Typography 
      fontWeight={600}
      color = "#3f704d"
      sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
      >
        FitTracker
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' style={{ width: '800px', height: '800px' }}/>
    </Box>
   
  );
};

export default HeroBanner;
