import React from 'react'
import { Link } from "react-router-dom";
function Homecard() {
  return (
    <>
      <section>
    <div class="backimage">
      <div class="background">
        <h1>Best Computer Institute in Rishikesh - Federal Institute of Computer Application (FICA)</h1>
        <h4>FICA is a leading IT learning center based in Rishikesh, Uttarakhand. The institute offers practical
          computer  programs including ADCA, CCA, Tally Prime, programming languages, web development and digital
           marketing. With experienced trainers and a hands-on approach, students gain real-world skills for 
          professional growth.
        </h4>
        <div style={{textAlign: "center",paddingTop: "30px"}}><Link to="/about"><button class="button1"> Learn More</button></Link>  
            <Link to="/course"><button class="button2">Visit Courses</button></Link>
            </div>
      </div>

    </div>
  </section>
    
    </>
  )
}

export default Homecard
