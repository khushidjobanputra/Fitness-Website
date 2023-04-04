import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollBar';

const SimilarExercises = ({targetMuscleExercise, equipmentExercise}) => {
  
  console.log(targetMuscleExercise);

  return (
    <Box sx={{mt: {lg:'100px', xs: '0px'}}}>
        <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p: '2px', position:'relative'}}>
            {targetMuscleExercise.length ?
             <HorizontalScrollbar data={targetMuscleExercise}/>
              : <Loader />
            }
        </Stack>

        <Typography variant='h3' mb={5}>Exercises that use the same Equipment</Typography>
        <Stack direction="row" sx={{p: '2px', position:'relative'}}>
            {equipmentExercise.length ?
             <HorizontalScrollbar data={equipmentExercise}/>
              : <Loader />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises