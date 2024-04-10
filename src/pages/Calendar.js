import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Calendar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: 'green',
          fontWeight: 'bold',
          fontSize: '4rem',
          mt: 8, // margin top
        }}
      >
        Calendar
      </Typography>
    </Box>
  );
};

export default Calendar;
