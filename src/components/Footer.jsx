import React from 'react'
import data from '../component data/Comcoursedata';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>
   <section class="footer">
     <div class="section1 footer1">
    <h2>Top Courses</h2>

     {
      data.map((abc)=>{
        return(
          
          <Link to={`/course/${abc.id}`}>
          <h3>{abc.title}</h3>
          </Link>
        );
     })
     }
  </div>

  <div class="section2 footer1">
    <h2>Home</h2>
    <div>
    <Link to="/About"><h4>About</h4> </Link>      
    <Link to="/course"><h4>Courses</h4> </Link> 
    <Link to="/contact"><h4>Contact Us</h4> </Link> 
      <h4>Search</h4>
      <h4>Latest Update</h4>
    </div>
  </div>


  <section className='footer222'>
  <div class="section3 footer1">
    <h2>Feature</h2>
    <div>
      <h4>Experienced Faculty</h4>
      <h4>Comprehensive Courses</h4>
      <h4>Flexible Learning Option</h4>
      <h4>Regular Evaluation</h4>
      <h4>Regular Evaluation</h4>
    </div>
  </div>

  <div>
     <div className="responsive">
      <div className="container">
        <iframe
          className="frame"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=fica%20institute&t=h&z=17&ie=UTF8&iwloc=B&output=embed"
          title="FICA Institute Location"
        />
      </div>
   
    </div>
  </div>
  </section>
  
  

</section>

 <section class="secondfooter">
  <div class="firstdiv">© <span style={{color: "gray"}}>2026</span> Federal Institute of Computer Application (FICA). All Rights Reserved.</div>
 <div>
             <ul>
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
            </ul>
 </div>
</section>
  


   </>
  )
}

export default Footer
