import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { exerciseOption, fetchData } from '../utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() =>{
        const fetchExerciseData = async() => {
            try {
                const bodyPartsData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOption);
                // Extract unique muscle categories from the bodyPartsData
                const uniqueMuscleCategories = [...new Set(bodyPartsData.map(item => item.Muscles))];
                setBodyParts(['all', ...uniqueMuscleCategories]);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };
        fetchExerciseData();

    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOption);
        
            const searchedExercises = exerciseData.filter(exercise =>
                (exercise.WorkOut && exercise.WorkOut.toLowerCase().includes(search)) ||
                (exercise.Intensity_Level && exercise.Intensity_Level.toLowerCase().includes(search)) ||
                (exercise.Equipment && exercise.Equipment.toLowerCase().includes(search)) ||
                (exercise.Muscles && exercise.Muscles.toLowerCase().includes(search))
            );
        
            setSearch('');
            setExercises(searchedExercises);
        }

    }
  return (
    <Stack alignItems="center" bt="37px"
    justifyContent={"center "} p="20px">
        <Typography fontWeight={600} sx={{fontSize: {lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
            Exercise List
        </Typography>
        <Box position="relative" mb="72px">
            <TextField 
            sx={{
                input: {fontWeight: '700', 
                border: 'none', 
                borderRadius: '4px'
            },
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff', borderRadius: "40px"
            }}
            height = "76px"
            value= {search}
            onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
            placeholder='Serach Exercises'
            type="text"
            />
            <Button className='seach-btn'
            sx={{
                bgcolor: '#2e8b57',
                color: '#fff',
                textTransform: 'none',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'},
                height: '56px',
                position: "absolute",
                right: '0'
            }}
            onClick={handleSearch}
            >
                Search


            </Button>

        </Box>
        <Box sx = {{position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart}/>


        </Box>

    </Stack>
  )
}

export default SearchExercises