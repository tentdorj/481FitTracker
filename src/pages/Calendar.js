import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Grid, Button, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper as MuiPaper } from '@mui/material';

// Placeholder for Calendar component
const Calendar = () => {
 const [value, setValue] = useState(new Date());
 const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

 return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        variant='static'
        orientation='portrait'
        value={value}
        disableFuture
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
 );
};

// Updated WorkoutLog component to display "Sets" and "Reps"
const WorkoutLog = ({ workouts }) => {
 return (
    <TableContainer component={MuiPaper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Workout</TableCell>
            <TableCell>Sets</TableCell>
            <TableCell>Reps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              <TableCell>{workout.date}</TableCell>
              <TableCell>{workout.name}</TableCell>
              <TableCell>{workout.sets}</TableCell>
              <TableCell>{workout.reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 );
};

// Updated AddWorkoutForm component to include "Sets" and "Reps"
const AddWorkoutForm = () => {
 const [workoutName, setWorkoutName] = useState('');
 const [sets, setSets] = useState('');
 const [reps, setReps] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to add workout to the database
 };

 return (
    <form onSubmit={handleSubmit}>
      <TextField label="Workout Name" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
      <TextField label="Sets" value={sets} onChange={(e) => setSets(e.target.value)} />
      <TextField label="Reps" value={reps} onChange={(e) => setReps(e.target.value)} />
      <Button type="submit">Add Workout</Button>
    </form>
 );
};

const Dashboard = () => {
 // Placeholder for workouts data
 const [workouts, setWorkouts] = useState([]);

 // Fetch workouts data from your API
 useEffect(() => {
    // Implement fetch logic here
 }, []);

 return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Fitness Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" component="h2">
                Daily Activity
              </Typography>
              <WorkoutLog workouts={workouts} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" component="h2">
                Add New Workout
              </Typography>
              <AddWorkoutForm />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" component="h2">
                Workout Calendar
              </Typography>
              <Calendar />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
 );
};

export default Dashboard;
