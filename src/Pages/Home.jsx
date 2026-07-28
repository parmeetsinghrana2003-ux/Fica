import React from 'react'
import Navbar from '../components/Navbar'
import Homecard from '../components/Homecard'
import Skilldev from '../components/Skilldev'
import Formcont from '../components/Formcont'
import Student from '../components/Student'
import Faculty from '../components/Faculty'
import Footer from '../components/Footer'
import Skillbased from '../components/Skillbased'

function Home() {
  return (
   <>
   <Navbar/>   
   <Homecard/>
   <Skilldev/>
   <Skillbased/>
   <Formcont/>
   <Student/>
   <Faculty/>
   <Footer/>
   </> 
  )
}

export default Home
