import React from 'react'
import Navbar from '../components/Navbar'
import Topcard from '../components/Topcard'
import Cardcontabout from '../components/Cardcontabout'
import Formcontabout from '../components/Formcontabout'
import Faculty from '../components/Faculty'
import Footer from '../components/Footer'

function About() {
  return (
    <>
   <div>
     <Navbar/>
    <Topcard/>
    <Cardcontabout/>
    <Formcontabout/>
    <Faculty/>
    <Footer/>
   </div>
    </>
  )
}

export default About
