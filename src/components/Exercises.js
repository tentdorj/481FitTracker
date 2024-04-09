import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { exerciseOption, fetchData } from '../utils/FetchData';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const Exercises = ({exercises, setExercises, bodyPart}) => {



  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOption);
     

      } else {
        console.log(bodyPart)
        exerciseData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOption);
        
        exerciseData = exerciseData.filter(exercise =>
          
          exercise.Muscles.includes(bodyPart)
        );
        
        setExercises(exerciseData)
    }
    
    

    }
    fetchExerciseData()

  }, [bodyPart]);

  return (
    <Box id="exercises"
    sx={{mt: {lg: '110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction = "row" sx={{grap: {lg: '110px', xs: '50px'}}} 
      flexWrap= "wrap" justifyContent= "center">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
         

        ))}

      </Stack>
    </Box>
  )
}

export default Exercises