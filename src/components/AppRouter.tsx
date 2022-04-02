import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RequireAuth from '../router/RequireAuth';
import Event from '../pages/Event';
import Login from '../pages/Login';
const AppRouter = () => {
    const auth = true;
  return (
    <Routes>
        <Route 
            path='/event' 
            element={<RequireAuth redirectTo='/home'>
                <Event />
            </RequireAuth>}
        />
            
        
        <Route path='/home' element={<Login />}/>
    </Routes>

  )
}

export default AppRouter