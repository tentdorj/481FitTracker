import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Ensure Button is imported from MUI

const Calendar = () => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayString = today.toLocaleDateString('en-US', options);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: 'green',
          fontWeight: 'bold',
          fontSize: '3rem',
          mt: 8, // Margin top
        }}
      >
        Calendar
      </Typography>
      
      <Box
        sx={{
          width: '85%', 
          display: 'flex',
          justifyContent: 'space-between', // Space between items
          alignItems: 'center',
          mt: 5, 
          px: 4, // Padding on the sides
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: 30,
              
            }}
          >
            Hello There!
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '6vh',
            ml: 11,
          }}
         >
        <Button variant="contained" color="primary" sx={{ mt: 8 }}> 
          Weekly View
        </Button>
          
        </Box>
        
        {/* Today's Date */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'normal',
          }}
        >
          {todayString}
        </Typography>
      </Box>
    </Box>
  );
};

export default Calendar;
