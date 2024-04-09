import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Corrected import

const ExerciseCard = ({ exercise }) => {
 const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
 };

 return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Stack>
   
   
      <Button sx={{ background: '#ff2625'}} variant="contained" onClick={() => openInNewTab(exercise.Video)}>
        Open Video
      </Button>
   
    
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.Intensity_Level}
      </Button>
    </Stack>
    <Typography ml="80px" color="#000" fontWeight="bold" fontSize="25px">
        {exercise.WorkOut}</Typography>
    </Link>
 );
};

export default ExerciseCard;