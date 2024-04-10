import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ExerciseCard = ({ exercise }) => {
 const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
 };

 return (
    <Box className="exercise-card" to={`/exercise/${exercise.id}`} sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <Typography variant="h4" mb="16px" sx={{ color: '#333', fontWeight: 'bold', fontSize: '20px' }}>{exercise.WorkOut}</Typography>
      <Typography variant="body1" mb="12px" sx={{ color: '#666', fontSize: '16px' }}>
        <strong>Equipment:</strong> {exercise['Equipment']}
      </Typography>
      <Typography variant="body1" mb="12px" sx={{ color: '#666', fontSize: '16px' }}>
        <strong>Sets:</strong> {exercise['Beginner Sets']}
      </Typography>
      <Typography variant="body1" mb="16px" sx={{ color: '#666', fontSize: '16px' }}>
        <strong>Explanation:</strong> {exercise['Explaination']}
      </Typography>
      <div style={{ position: 'relative' }}>
        <Stack direction="row" spacing={2} style={{ position: 'absolute', top: '-50px', left: 0 }}>
          <Button
            sx={{
              background: '#ff2625',
              '&:hover': {
                background: '#ff2625',
                color: '#fff',
              },
            }}
            variant="contained"
            onClick={() => openInNewTab(exercise.Video)}
          >
            Open Video
          </Button>
          <Button
            sx={{ color: '#fff', background: '#FCC757', borderRadius: '20px', textTransform: 'capitalize' }}
          >
            {exercise.Intensity_Level}
          </Button>
        </Stack>
      </div>
    </Box>
 );
};

export default ExerciseCard;
