import React from 'react'
import Home from './Home'
import About from './About'
import Course from './Course'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Contactus'

function Menu() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/contact" element={<Contactus/>} />
      </Routes>
  )
}

export default Menu
