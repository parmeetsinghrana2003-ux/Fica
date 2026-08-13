import React from 'react'
import Navbar from '../components/Navbar'
import Topcard from '../components/Topcard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Mainbranchmap from '../components/Mainbranchmap'
import Subbranch from '../components/Subbranch'


function Contactus() {
  return (
    <>
   <div>
     <Navbar/>
    <Topcard/>
    <Contact/>
    <div className='mapflex'>
    <Mainbranchmap/>
    <Subbranch/>
    </div>
    <Footer/>
   </div>
    </>
  )
}

export default Contactus
