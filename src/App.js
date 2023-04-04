import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import BmiCalc from './pages/BmiCalc';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/bmi' element={<BmiCalc />}/>
        </Routes>
        {/* <Footer /> */}
    </Box>
  )
}

export default App