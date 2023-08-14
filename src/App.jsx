import React from 'react'
import Landing from './landing site/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './patient/Dashboard';
import Appointment from './Appointment';
import PatientLogin from './patient/PatientLogin';
import PatientSignup from './patient/PatientSignup';

const App = () => {
  return (
    <div>
      
    <Router>
      <Routes>
            <Route path="/patient" element={<Dashboard/>} /> 
            <Route path="/" element={<Landing/>} />
            <Route path="/appointment" element={<Appointment/>} /> 
            <Route path='/patient/login' element={<PatientLogin/>} />
            <Route path='/patient/signup' element={<PatientSignup/> } />
      </Routes>
    </Router>
    


    </div>
    
  )
}

export default App;