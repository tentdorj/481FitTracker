import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const Nutrition = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
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
        Nutrition
      </Typography>
      <Box
        sx={{
          width: '45%',
          minHeight: '500px',
          backgroundColor: '#f2f2f2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '80px',
          mt: 4, // margin top
          p: 2, // padding
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          
          sx={{ 
            mt: -25,  // margin top and bottom
            fontSize: '1.5rem',
           
          }}
        >
          Add Food
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <FormControl fullWidth>
            <Typography variant="body1" component="label" htmlFor="mealType" sx={{ mb: 1, textAlign: 'center' }}>
              Meal Type:
            </Typography>
            <Select
              labelId="mealType-label"
              id="mealType"
              defaultValue=""
              label="Meal Type"
              sx={{ mb: 2 }} // margin bottom
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="snack">Snack</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Nutrition;