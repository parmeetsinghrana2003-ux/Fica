import React from 'react'
import Home from './Home'
import About from './About'
import Course from './Course'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Contactus'
import CourseDetails from '../components/CourseDetails'

function Menu() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/course/:id" element={<CourseDetails />} /> 
      </Routes>
  )
}

export default Menu
