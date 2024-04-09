import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import HeroBannerImage from "../assets/images/fitness.jpeg";
import { Opacity } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '370px', xs: '100px' },
        ml: { sm: '30px' },
        position: 'relative',
        p: '10px',
      }}
    >
      <Typography color="#FF2625" fontWeight="0" fontSize="26px">
        FitTracker
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', sm: '40px' } }} mb="23px" mt="30px">
        Age With Grace
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Find Balance, Strength, and Confidence in Every Session
      </Typography>
      <Button variant="contained" color="error" href ="#exercises" sx={{backgroundColor: "#FF2625", padding: '10px'}}
        Explore Exercises>
        
      </Button>
      <Typography 
      fontWeight={600}
      color = "#FF2625"
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
