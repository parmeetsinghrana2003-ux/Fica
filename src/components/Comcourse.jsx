import React from 'react'
import data from '../component data/Comcoursedata'
function Comcourse() {
  return (
    <>
    <section class="content1">
    <p class="animate__animated animate__bounceIn animate__delay  animate__slow animate__infinite	">Computer Courses in Rishikesh Offered by FICA Institute</p>
    <h4>With our professional training programs, we offer students a high-quality and tailored educational experience, enriched with modern and unique features. Alongside ADCA and CCA programs, we provide training in programming, web designing, digital marketing, and language courses. Additionally, we empower our students with expertise in Python, English speaking, Hindi, and English typing.</h4>
  </section>

  {/* card */}
  <section class="background2">
    <div class="wrapper">
   
   {
    data.map((abc)=>{
        return(
        <div class="single-card">
        <div class="img-area">
          <img src={abc.img} alt="IMAGE NOT FOUND"/>
        </div>

        <div class="info">
          <h3>{abc.title}</h3>
        </div>
      </div>
        );
    })
   }

    </div>
    </section>
    </>
  )
}

export default Comcourse
