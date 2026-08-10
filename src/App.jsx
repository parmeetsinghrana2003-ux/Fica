import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Pages/Menu'
import Slidercard from './components/Slidercard'
import Formcont from './components/Formcont'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
     <BrowserRouter>
     <ScrollToTop/>
     <Menu/>
     </BrowserRouter>
  
  )
}

export default App
