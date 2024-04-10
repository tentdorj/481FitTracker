import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Nutrition = () => {
  const [mealType, setMealType] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // Assume username is stored in localStorage under 'userToken'
  const username = localStorage.getItem('userToken'); // Username used as key

  // Load saved food items for the current user on component mount
  useEffect(() => {
    const allUsersFoodData = JSON.parse(localStorage.getItem('userFoodData')) || {};
    const userFoodItems = allUsersFoodData[username] || [];
    setFoodItems(userFoodItems);
  }, [username]);

  const handleAddFoodItem = () => {
    const newFoodItem = { mealType, foodType, quantity };
    const updatedFoodItems = [...foodItems, newFoodItem];

    // Retrieve, update, and save the food data for all users
    const allUsersFoodData = JSON.parse(localStorage.getItem('userFoodData')) || {};
    allUsersFoodData[username] = updatedFoodItems;
    localStorage.setItem('userFoodData', JSON.stringify(allUsersFoodData));

    setFoodItems(updatedFoodItems);
    setMealType('');
    setFoodType('');
    setQuantity('');
  };
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
          mt: 8,
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
          mt: 4,
          p: 2,
        }}
      >
        <Typography variant="h2" component="h2" sx={{ mt: -13, fontSize: '1.5rem', fontWeight: 'bold' }}>
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
            <Typography variant="body1" component="label" htmlFor="mealType" sx={{ mb: 0.5, textAlign: 'center', mt: 5, minHeight: 40 }}>
              Meal Type:
            </Typography>
            <Select
              labelId="mealType-label"
              id="mealType"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              label="Meal Type"
              sx={{ mb: 1 }}
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="snack">Snack</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="food-type"
            label="Food Type"
            variant="outlined"
            placeholder="Enter food type"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="quantity"
            label="Quantity (g)"
            variant="outlined"
            placeholder="Enter quantity in grams"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleAddFoodItem} sx={{ mt: 1 }}>
            Add
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: 2 }}>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Your Food Items:
        </Typography>
        <List>
          {foodItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${item.foodType} - ${item.quantity}g`} secondary={item.mealType} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Nutrition;
