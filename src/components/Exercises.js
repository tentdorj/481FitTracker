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
        console.log(exerciseData)
     

      } else {
        console.log(bodyPart)
        exerciseData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOption);
        
        exerciseData = exerciseData.filter(exercise =>
          
          exercise.Muscles.includes(bodyPart)
        );
        
      
    }
    setExercises(exerciseData)
    
    

    }
    fetchExerciseData()

  }, [bodyPart]);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800,behavior: 'smooth'})

  }

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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
         

        ))}

      </Stack>

      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 &&   (
            <Pagination 
            color = "standard"
            shape = "rounded"
            defaultPage={1}
            count = {Math.ceil(exercises.length /exercisesPerPage)}
            page = {currentPage}
            onChange= {paginate}
            size = "large"
            />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises