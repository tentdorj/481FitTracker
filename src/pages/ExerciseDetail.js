import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'

import { exerciseOption, fetchData } from '../utils/FetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams ();


  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetails = 'https://work-out-api1.p.rapidapi.com/search';
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about'

      const exerciseDetailsData = await fetchData(`${exerciseDetails}/exercises/${id}`, exerciseOption)
      setExerciseDetail(exerciseDetailsData)
     

    }

    fetchExerciseData();

  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercise />

    </Box>
  )
}

export default ExerciseDetail