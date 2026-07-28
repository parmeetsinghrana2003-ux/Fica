import React from 'react'
import Slidercard from './Slidercard';

function Student() {
  return (
    <>
  <section class="content1">
    <p class="animate__animated animate__bounceIn animate__delay  animate__slow animate__infinite	">What Our Students
      Say About FICA</p>
    <h4>Students share their learning experiences at <span>FICA, Rishikesh.</span>Their feedback highlights practical
      skills, supportive faculty and structured training that helps learners grow with confidence.</h4>
  </section>
   {/* slider card start */}
  <section class="slider_card">\
  <Slidercard/>
  
  </section> 
  {/* slider card end */}

    </>
  )
}

export default Student;
