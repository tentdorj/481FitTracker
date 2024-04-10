import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
          minHeight: '600px',
          backgroundColor: '#f2f2f2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          mt: 4, // margin top
          p: 2, // padding
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          
          sx={{ 
            mt: -13,  // margin top and bottom
            fontSize: '1.5rem',
            fontWeight: 'bold',
           
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
            <Typography variant="body1" component="label" htmlFor="mealType" sx={{ mb: 0.5, textAlign: 'center',mt: 5,minHeight:40}}>
              Meal Type:
            </Typography>
            <Select
              labelId="mealType-label"
              id="mealType"
              defaultValue=""
              label="Meal Type"
              sx={{ mb: 1 }} // margin bottom
              
            >
              
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="snack">Snack</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body1" component="label" htmlFor="food-type" sx={{ mb: 1, textAlign: 'center', width: '100%' }}>
            Food Type:
          </Typography>
            <TextField
              fullWidth
              id="food-type"
              label=""
              variant="outlined"
              placeholder="Enter food type"
              sx={{ mb: 2 }}
            />
            <Typography variant="body1" component="label" htmlFor="quantity" sx={{ mb: 1, textAlign: 'center', width: '100%' }}>
            Quantity:
          </Typography>
            <TextField
              fullWidth
              id="quantity"
              label=""
              variant="outlined"
              placeholder="Enter quantity in grams"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Nutrition;