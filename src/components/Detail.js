import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'



const Detail = ({exerciseDetail}) => {
    const {bodyPart, WorkOut, Intensity_Level, BeginnerSets, IntermediateSets, ExpertSets, Equipment, Explanation} = exerciseDetail;
  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>

    </Stack>

  );
}

export default Detail