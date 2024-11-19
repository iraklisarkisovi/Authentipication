import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../main'
import PrivateSite from '../PrivateSite'
import ResponsiveAppBar from '../materialHeader'
import { route } from './interfaces'
import Register from '../Register'
import Login from '../Login'
 
 

const Routess = () => {
  return (
        <Routes>
          <Route path='/' element={<ResponsiveAppBar route={route}/>}>
                <Route index element={<Main/>}/>
                <Route path={'/valid'} element={<PrivateSite/>}/>
          </Route>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
 
  )
}

export default Routess

