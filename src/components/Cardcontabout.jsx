import React from 'react'
import { Link } from "react-router-dom";
function Cardcontabout() {
  return (
   <>
   <section class="bodyclass">
    <section class="class11">
        <div  class="fade-right " >
        {/* <img src="Images/about image/13017.jpg" alt="image not found" >  */}
        </div>
        <div  class="fade-left  ">
        {/* <img src="Images/about image/16458.jpg" alt=" image not found"> */}
            </div>
    </section>
    <section class="class12">
        <h2>Welcome to Federal Institute of Computer Application</h2>
        <p>At the Federal Institute of Computer Application (FICA), we provide a focused and professional learning environment where students gain practical knowledge along with industry-relevant skills. Our institute is dedicated to helping learners build strong foundations in computer applications, programming, web technologies, and digital tools that are essential in today's competitive job market. <br /> <br />Established in 2016, FICA Computer Institute has grown into a trusted computer training institute in Rishikesh, known for quality education and result-oriented training. Our courses are regularly updated to match current industry standards, ensuring that students learn the latest technologies with hands-on practical experience. Whether you are a beginner starting your journey in computer education or a working professional looking to upgrade your skills, FICA offers structured programs designed for real career growth. <br /> <br />At FICA Computer Center, we are committed to empowering students with the knowledge, confidence, and technical expertise required to succeed in the field of computer applications. As a leading institute in Rishikesh, we focus on skill development, practical training, and career guidance to help our students achieve long-term success in the digital world.</p>
 <Link to="/contact"> <center> <button>Contact FICA Computer Institute</button></center> </Link>
</section>
</section>  
   </>
  )
}

export default Cardcontabout
